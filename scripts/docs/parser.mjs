import { Project, SyntaxKind } from 'ts-morph';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { sanitizeType } from './models.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

const STORYBOOK_BASE = 'https://csa-italy.github.io/havas-ui/?path=/story/';

/**
 * @param {string} srcGlob
 * @returns {Promise<import('./models.mjs').ComponentDocModel[]>}
 */
export async function parseComponents(srcGlob = 'src/**/*.tsx') {
  const project = new Project({
    tsConfigFilePath: path.join(ROOT_DIR, 'tsconfig.app.json'),
    addFilesFromTsConfig: false,
  });

  project.addSourceFilesFromTsConfig(path.join(ROOT_DIR, 'tsconfig.app.json'));

  const indexFile = project.getSourceFile(path.join(ROOT_DIR, 'src/index.ts'));
  if (!indexFile) {
    throw new Error('Could not find src/index.ts');
  }

  const models = [];
  const seenComponents = new Set();

  for (const exportDecl of indexFile.getExportDeclarations()) {
    const moduleSpecifier = exportDecl.getModuleSpecifierValue();
    if (!moduleSpecifier) continue;

    const sourceFile = exportDecl.getModuleSpecifierSourceFile();
    if (!sourceFile) continue;

    const filePath = sourceFile.getFilePath();
    const fileName = path.basename(filePath, path.extname(filePath));
    const exports = sourceFile.getExportedDeclarations();

    for (const [name, declarations] of exports) {
      if (!/^[A-Z]/.test(name)) continue;
      if (seenComponents.has(name)) continue;

      const decl = declarations[0];
      if (!decl) continue;

      const isSubComponent = isSubComponentOf(name, fileName);
      if (isSubComponent) continue;

      const model = extractComponentModel(name, sourceFile, fileName, filePath, seenComponents);
      models.push(model);
    }
  }

  return models;
}

/**
 * Determines if a component name is a sub-component of the file it lives in.
 * e.g., AccordionItem from accordion.tsx is a sub-component (not a main page).
 * @param {string} name
 * @param {string} fileName
 * @returns {boolean}
 */
function isSubComponentOf(name, fileName) {
  const lowerName = name.toLowerCase();
  const lowerFile = fileName.toLowerCase();

  if (lowerName === lowerFile) return false;

  const suffixes = ['Item', 'Trigger', 'Content', 'Label', 'Separator',
                    'Group', 'Value', 'Indicator', 'Portal', 'Overlay',
                    'Header', 'Footer', 'Body', 'ScrollUpButton', 'ScrollDownButton'];

  for (const suffix of suffixes) {
    if (lowerName.endsWith(suffix.toLowerCase()) &&
        lowerName.startsWith(lowerFile)) {
      return true;
    }
  }

  return false;
}

/**
 * @param {string} name
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} fileName
 * @param {string} filePath
 * @param {Set<string>} seenComponents
 * @returns {import('./models.mjs').ComponentDocModel}
 */
function extractComponentModel(name, sourceFile, fileName, filePath, seenComponents) {
  const exports = sourceFile.getExportedDeclarations();
  const decl = exports.get(name)?.[0];

  if (!decl) {
    return {
      name,
      filePath: filePath.replace(ROOT_DIR + '/', ''),
      description: '',
      storybookUrl: '',
      usageExample: '',
      props: [],
    };
  }

  const jsDoc = decl.getJsDocs?.()[0];

  const description = extractDescription(jsDoc, decl);
  const props = extractProps(sourceFile, name, jsDoc);
  const cvaDefaults = extractCVADefaults(sourceFile);

  const storySlug = `ui-${fileName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  const subComponents = extractSubComponents(sourceFile, name, fileName, seenComponents);

  const model = {
    name,
    filePath: filePath.replace(ROOT_DIR + '/', ''),
    description,
    storybookUrl: `${STORYBOOK_BASE}${storySlug}--docs`,
    usageExample: generateUsageExample(name, props),
    props: mergePropsWithCVADefaults(props, cvaDefaults),
    subComponents: subComponents.length > 0 ? subComponents : undefined,
  };

  seenComponents.add(name);
  return model;
}

/**
 * @param {import('ts-morph').JSDocStructure | undefined} jsDoc
 * @param {import('ts-morph').Declaration | undefined} decl
 * @returns {string}
 */
function extractDescription(jsDoc, decl) {
  if (jsDoc) {
    const desc = jsDoc.getDescription().trim();
    if (desc) return desc;
  }
  return '';
}

/**
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} componentName
 * @param {import('ts-morph').JSDocStructure | undefined} jsDoc
 * @returns {import('./models.mjs').PropDoc[]}
 */
function extractProps(sourceFile, componentName, jsDoc) {
  const props = [];

  const propsTypeName = `${componentName}Props`;
  const propsType =
    sourceFile.getInterface(propsTypeName) ??
    sourceFile.getTypeAlias(propsTypeName);

  if (!propsType) {
    return extractPropsFromFunction(sourceFile, componentName);
  }

  const members = propsType.getMembers?.() ?? [];

  for (const member of members) {
    const propName = member.getName?.();
    if (!propName || propName === 'className' || propName === 'children') continue;

    const type = member.getType().getText(member);
    const memberJsDoc = member.getJsDocs?.()[0];
    const description = memberJsDoc?.getDescription().trim() ?? '';
    const hasQuestionToken = member.hasQuestionToken?.() ?? false;

    let defaultValue;
    const defaultTag = memberJsDoc?.getTags?.().find(t => t.getTagName?.() === 'default');
    if (defaultTag) {
      defaultValue = defaultTag.getCommentText?.() ?? undefined;
    }

    const cvaDefault = extractCVAFromMember(member, sourceFile);

    props.push({
      name: propName,
      type: sanitizeType(type),
      defaultValue: defaultValue ?? cvaDefault,
      required: !hasQuestionToken && !defaultValue && !cvaDefault,
      description,
    });
  }

  return props;
}

/**
 * Fallback: extract props from function parameters when no Props type exists.
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} componentName
 * @returns {import('./models.mjs').PropDoc[]}
 */
function extractPropsFromFunction(sourceFile, componentName) {
  const props = [];

  const exports = sourceFile.getExportedDeclarations();
  const decl = exports.get(componentName)?.[0];
  if (!decl) return props;

  const parameters = decl.getParameters?.() ?? [];
  for (const param of parameters) {
    const name = param.getName?.();
    if (!name || name === 'className' || name === 'children' || name === '...props') continue;

    const typeText = param.getType?.()?.getText?.() ?? 'unknown';
    const jsDoc = param.getJsDocs?.()[0];
    const description = jsDoc?.getDescription?.()?.trim?.() ?? '';
    const hasQuestionToken = param.hasQuestionToken?.() ?? false;
    const defaultValue = param.getDefault?.()?.getText?.();

    props.push({
      name,
      type: sanitizeType(typeText),
      defaultValue: defaultValue ?? undefined,
      required: !hasQuestionToken && !defaultValue,
      description,
    });
  }

  return props;
}

/**
 * @param {import('ts-morph').TypeLiteralNode | import('ts-morph').PropertySignature} member
 * @param {import('ts-morph').SourceFile} sourceFile
 * @returns {string | undefined}
 */
function extractCVAFromMember(member, sourceFile) {
  try {
    const initializer = member.getInitializer?.();
    if (!initializer) return undefined;

    const callExpr = initializer.asKind?.(SyntaxKind.CallExpression) ??
                     initializer.asKind?.(SyntaxKind.CallExpression);

    if (!callExpr) return undefined;
    if (callExpr.getExpression().getText() !== 'cva') return undefined;

    const args = callExpr.getArguments();
    if (args.length < 2) return undefined;

    const configArg = args[1];
    const variantsProp = configArg.asKind?.(SyntaxKind.ObjectLiteralExpression)
      ?.getProperty?.('variants');

    if (!variantsProp) return undefined;

    const variantsInit = variantsProp.getInitializer?.();
    if (!variantsInit) return undefined;

    const defaultsProp = configArg.asKind?.(SyntaxKind.ObjectLiteralExpression)
      ?.getProperty?.('defaultVariants');

    if (!defaultsProp) return undefined;

    const defaultsInit = defaultsProp.getInitializer?.();
    if (!defaultsInit) return undefined;

    for (const prop of defaultsInit.asKind?.(SyntaxKind.ObjectLiteralExpression)?.getProperties?.() ?? []) {
      if (prop.getName?.() === member.getName?.()) {
        return prop.getInitializer?.()?.getText?.();
      }
    }
  } catch (_) {}

  return undefined;
}

/**
 * @param {import('ts-morph').SourceFile} sourceFile
 * @returns {Record<string, string>}
 */
function extractCVADefaults(sourceFile) {
  const defaults = {};

  try {
    const callExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);

    for (const call of callExpressions) {
      if (call.getExpression().getText() !== 'cva') continue;

      const args = call.getArguments();
      if (args.length < 2) continue;

      const configArg = args[1];
      const defaultsProp = configArg
        .asKind?.(SyntaxKind.ObjectLiteralExpression)
        ?.getProperty?.('defaultVariants');

      if (!defaultsProp) continue;

      const defaultsInit = defaultsProp.getInitializer?.();
      if (!defaultsInit?.asKind?.(SyntaxKind.ObjectLiteralExpression)) continue;

      for (const prop of defaultsInit.getProperties()) {
        const name = prop.getName?.();
        const value = prop.getInitializer?.()?.getText?.();
        if (name && value) {
          defaults[name] = value;
        }
      }
    }
  } catch (_) {}

  return defaults;
}

/**
 * @param {import('./models.mjs').PropDoc[]} props
 * @param {Record<string, string>} cvaDefaults
 * @returns {import('./models.mjs').PropDoc[]}
 */
function mergePropsWithCVADefaults(props, cvaDefaults) {
  return props.map(prop => {
    if (cvaDefaults[prop.name] && !prop.defaultValue) {
      return { ...prop, defaultValue: cvaDefaults[prop.name] };
    }
    return prop;
  });
}

/**
 * @param {import('ts-morph').SourceFile} sourceFile
 * @param {string} mainComponentName
 * @param {string} fileName
 * @param {Set<string>} seenComponents
 * @returns {import('./models.mjs').ComponentDocModel[]}
 */
function extractSubComponents(sourceFile, mainComponentName, fileName, seenComponents) {
  const subComponents = [];
  const exports = sourceFile.getExportedDeclarations();

  const suffixes = ['Item', 'Trigger', 'Content', 'Label', 'Separator',
                    'Group', 'Value', 'Indicator', 'Portal', 'Overlay',
                    'Header', 'Footer', 'Body', 'ScrollUpButton', 'ScrollDownButton'];

  for (const [name, declarations] of exports) {
    if (seenComponents.has(name)) continue;

    const lowerName = name.toLowerCase();
    const lowerFile = fileName.toLowerCase();

    let isSub = false;
    for (const suffix of suffixes) {
      if (lowerName.endsWith(suffix.toLowerCase()) &&
          lowerName.startsWith(lowerFile)) {
        isSub = true;
        break;
      }
    }

    if (!isSub) continue;

    const decl = declarations[0];
    if (!decl) continue;

    const jsDoc = decl.getJsDocs?.()[0];
    const description = jsDoc?.getDescription().trim() ?? '';

    const props = extractProps(sourceFile, name, jsDoc);
    const cvaDefaults = extractCVADefaults(sourceFile);

    subComponents.push({
      name,
      filePath: sourceFile.getFilePath().replace(ROOT_DIR + '/', ''),
      description,
      storybookUrl: '',
      usageExample: '',
      props: mergePropsWithCVADefaults(props, cvaDefaults),
    });

    seenComponents.add(name);
  }

  return subComponents;
}

/**
 * @param {string} componentName
 * @param {import('./models.mjs').PropDoc[]} props
 * @returns {string}
 */
function generateUsageExample(componentName, props) {
  const knownProps = ['variant', 'size', 'asChild', 'className', 'children'];
  const relevantProps = props.filter(p => knownProps.includes(p.name));

  const parts = [];
  for (const prop of relevantProps) {
    if (prop.defaultValue && prop.defaultValue !== 'undefined') {
      parts.push(`${prop.name}="${prop.defaultValue.replace(/"/g, '')}"`);
    }
  }

  const propsStr = parts.length > 0 ? ' ' + parts.join(' ') : '';

  const hasChildren = props.some(p => p.name === 'children');
  if (hasChildren) {
    return `<${componentName}${propsStr}>\n  Content\n</${componentName}>`;
  }
  return `<${componentName}${propsStr} />`;
}