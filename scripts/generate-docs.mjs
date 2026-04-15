import { Project, SyntaxKind } from 'ts-morph';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const STORYBOOK_BASE = 'https://csa-italy.github.io/havas-ui/?path=/story/';

const project = new Project({
  tsConfigFilePath: path.join(ROOT_DIR, 'tsconfig.app.json'),
  addFilesFromTsConfig: false,
});

project.addSourceFilesFromTsConfig(path.join(ROOT_DIR, 'tsconfig.app.json'));

const indexFile = project.getSourceFile(path.join(ROOT_DIR, 'src/index.ts'));
if (!indexFile) {
  console.error('Could not find src/index.ts');
  process.exit(1);
}

const exportedComponents = [];
const seenComponents = new Set();

for (const exportDecl of indexFile.getExportDeclarations()) {
  const moduleSpecifier = exportDecl.getModuleSpecifierValue();
  if (!moduleSpecifier) continue;

  const sourceFile = exportDecl.getModuleSpecifierSourceFile();
  if (!sourceFile) continue;

  const filePath = sourceFile.getFilePath();
  const fileName = path.basename(filePath, path.extname(filePath));

  const exportedDeclarations = sourceFile.getExportedDeclarations();
  
  let mainComponent = null;
  let mainComponentDecl = null;

  for (const [name, declarations] of exportedDeclarations) {
    if (!/^[A-Z]/.test(name)) continue;
    if (seenComponents.has(name)) continue;

    const decl = declarations[0];
    if (!decl) continue;

    if (name.toLowerCase() === fileName.toLowerCase()) {
      mainComponent = name;
      mainComponentDecl = decl;
      break;
    }

    if (!mainComponent) {
      mainComponent = name;
      mainComponentDecl = decl;
    }
  }

  if (mainComponent && mainComponentDecl) {
    const jsDoc = mainComponentDecl.getJsDocs?.()[0];
    const description = jsDoc?.getDescription().trim() ?? '';
    const props = extractProps(sourceFile, mainComponent, project);

    const storySlug = `ui-${fileName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

    exportedComponents.push({
      name: mainComponent,
      description,
      filePath: filePath.replace(ROOT_DIR + '/', ''),
      storyUrl: `${STORYBOOK_BASE}${storySlug}--docs`,
      props,
    });

    seenComponents.add(mainComponent);
  }
}

const md = generateMarkdown(exportedComponents);
fs.writeFileSync(path.join(ROOT_DIR, 'LIBRARY-TOUR.md'), md, 'utf-8');
console.log(`✅ LIBRARY-TOUR.md generato con ${exportedComponents.length} componenti`);

function extractProps(sourceFile, componentName, project) {
  const props = [];

  const propsType =
    sourceFile.getInterface(`${componentName}Props`) ??
    sourceFile.getTypeAlias(`${componentName}Props`);

  if (!propsType) return props;

  const members =
    propsType.getMembers?.() ??
    propsType.getTypeNode?.()?.getMembers?.() ??
    [];

  for (const member of members) {
    const propName = member.getName?.();
    if (!propName) continue;

    const type = member.getType().getText(member);
    const jsDoc = member.getJsDocs?.()[0];
    const description = jsDoc?.getDescription().trim() ?? '';
    const hasQuestionToken = member.hasQuestionToken?.() ?? false;

    const defaultTag = jsDoc?.getTags().find(t => t.getTagName() === 'default');
    const defaultValue = defaultTag?.getCommentText?.() ?? '—';

    props.push({
      name: propName,
      type: sanitizeType(type),
      required: !hasQuestionToken,
      default: defaultValue,
      description,
    });
  }

  const cvaVariants = extractCvaVariants(sourceFile);
  return mergePropsWithVariants(props, cvaVariants);
}

function extractCvaVariants(sourceFile) {
  const variants = {};

  const callExpressions = sourceFile.getDescendantsOfKind(SyntaxKind.CallExpression);

  for (const call of callExpressions) {
    if (call.getExpression().getText() !== 'cva') continue;

    const args = call.getArguments();
    if (args.length < 2) continue;

    const configArg = args[1];

    try {
      const variantsProperty = configArg
        .getProperties?.()
        ?.find(p => p.getName?.() === 'variants');

      if (!variantsProperty) continue;

      const variantsInit = variantsProperty.getInitializer?.();
      if (!variantsInit) continue;

      for (const variantProp of variantsInit.getProperties()) {
        const variantName = variantProp.getName();
        const variantValues = variantProp
          .getInitializer()
          .getProperties()
          .map(p => `"${p.getName()}"`)
          .join(' | ');
        variants[variantName] = variantValues;
      }
    } catch (_) {
    }
  }

  return variants;
}

function mergePropsWithVariants(props, cvaVariants) {
  return props.map(prop => {
    if (cvaVariants[prop.name]) {
      return { ...prop, type: cvaVariants[prop.name] };
    }
    return prop;
  });
}

function sanitizeType(type) {
  return type
    .replace(/import\("[^"]+"\)\./g, '')
    .replace(/React\./g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function generateMarkdown(components) {
  const lines = [
    `# CSA Italy Havas UI — Component Library Tour`,
    ``,
    `> Generato tramite analisi statica del codice. Non modificare manualmente.`,
    `> Ultimo aggiornamento: ${new Date().toISOString().split('T')[0]}`,
    ``,
    `## Overview`,
    ``,
    `Questa libreria fornisce componenti UI riutilizzabili basati su shadcn/ui, Radix UI e Tailwind CSS.`,
    `Importa i componenti da \`@csa-italy/havas-ui\`.`,
    ``,
    `## Available Components`,
    ``,
    `| Componente | Descrizione | Storybook |`,
    `|------------|-------------|-----------|`,
  ];

  for (const comp of components) {
    lines.push(
      `| [${comp.name}](#${comp.name.toLowerCase()}) | ${comp.description || '—'} | [Demo](${comp.storyUrl}) |`
    );
  }

  for (const comp of components) {
    lines.push(
      ``,
      `---`,
      ``,
      `### ${comp.name}`,
      ``,
      `**File:** \`${comp.filePath}\`  `,
      `**Live Demo:** [${comp.storyUrl}](${comp.storyUrl})`,
      ``,
      comp.description || '_Nessuna descrizione disponibile._',
      ``,
    );

    if (comp.props.length > 0) {
      lines.push(
        `**Props:**`,
        ``,
        `| Prop | Tipo | Default | Required | Descrizione |`,
        `|------|------|---------|----------|-------------|`,
      );

      for (const p of comp.props) {
        lines.push(
          `| \`${p.name}\` | \`${p.type}\` | \`${p.default}\` | ${p.required ? '✅' : '—'} | ${p.description || '—'} |`
        );
      }
      lines.push('');
    }

    lines.push(
      `**Usage:**`,
      ``,
      `\`\`\`tsx`,
      `import { ${comp.name} } from '@csa-italy/havas-ui'`,
      ``,
      generateUsageExample(comp),
      `\`\`\``,
      ``,
    );
  }

  return lines.join('\n');
}

function generateUsageExample(comp) {
  const requiredProps = comp.props
    .filter(p => p.required && p.name !== 'children')
    .map(p => `${p.name}="${p.default !== '—' ? p.default : 'value'}"`)
    .join(' ');

  const hasChildren = comp.props.some(p => p.name === 'children');

  if (hasChildren) {
    return `<${comp.name}${requiredProps ? ' ' + requiredProps : ''}>\n  Content\n</${comp.name}>`;
  }
  return `<${comp.name}${requiredProps ? ' ' + requiredProps : ''} />`;
}