/**
 * Pure template functions for generating Markdown documentation.
 * No side effects — all functions receive data and return strings.
 */

/**
 * @param {import('./models.mjs').ComponentDocModel} model
 * @returns {string}
 */
export function generateComponentPage(model) {
  const lines = [];

  lines.push(`# 🧩 ${model.name}`);
  lines.push('');
  lines.push(`**Sorgente:** \`${model.filePath}\``);

  if (model.storybookUrl) {
    lines.push(`**Storybook:** [▶ Vedi la Live Demo](${model.storybookUrl})`);
  } else {
    lines.push(`**Storybook:** ⚠️ Non configurato`);
  }

  lines.push('');

  if (model.description) {
    lines.push(`> ${model.description}`);
  } else {
    lines.push(`> ⚠️ Descrizione non disponibile. Aggiungere JSDoc @description al componente.`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## 💻 Usage');
  lines.push('');
  lines.push('```tsx');
  lines.push(`import { ${model.name} } from '@ui-kit/ui-kit'`);
  lines.push('');
  lines.push(model.usageExample || `// TODO: aggiungere @example nel JSDoc del componente`);
  lines.push('```');
  lines.push('');

  lines.push(...generatePropsSection(model.props));

  if (model.subComponents && model.subComponents.length > 0) {
    lines.push('');
    lines.push('---');
    lines.push('');
    lines.push('## 🧱 Sub-Components');
    lines.push('');

    for (const sub of model.subComponents) {
      lines.push(...generateSubComponentSection(sub));
    }
  }

  lines.push('');
  lines.push('---');
  lines.push(`*Generato automaticamente da \`scripts/docs/index.mjs\` — non modificare manualmente.*`);
  lines.push(`*Ultimo aggiornamento: ${new Date().toISOString()}*`);

  return lines.join('\n');
}

/**
 * @param {import('./models.mjs').PropDoc[]} props
 * @returns {string[]}
 */
export function generatePropsSection(props) {
  const lines = [];

  lines.push('## ⚙️ Props API');
  lines.push('');

  if (!props || props.length === 0) {
    lines.push('> Nessuna prop documentata per questo componente.');
    return lines;
  }

  lines.push('| Property | Type | Default | Required | Description |');
  lines.push('|----------|------|---------|----------|-------------|');

  for (const prop of props) {
    const typeStr = prop.type || 'unknown';
    const defaultStr = prop.defaultValue ?? '-';
    const requiredStr = prop.required ? '✅' : '—';
    const descStr = prop.description || '—';

    lines.push(`| \`${prop.name}\` | \`${typeStr}\` | \`${defaultStr}\` | ${requiredStr} | ${descStr} |`);
  }

  return lines;
}

/**
 * @param {import('./models.mjs').ComponentDocModel} sub
 * @returns {string[]}
 */
export function generateSubComponentSection(sub) {
  const lines = [];

  lines.push(`### \`${sub.name}\``);
  lines.push('');

  if (sub.description) {
    lines.push(`> ${sub.description}`);
  } else {
    lines.push(`> ⚠️ Descrizione non disponibile per ${sub.name}.`);
  }

  lines.push('');
  lines.push(...generatePropsSection(sub.props));

  return lines;
}

/**
 * @param {import('./models.mjs').ComponentDocModel[]} models
 * @returns {string}
 */
export function generateIndexPage(models) {
  const lines = [];

  lines.push('# 📚 UI Kit — Library Tour');
  lines.push('');
  lines.push('> Documentazione autogenerata. Ultima build: ' + new Date().toISOString());
  lines.push('> Script: `npm run docs`');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Componenti disponibili');
  lines.push('');
  lines.push('| Componente | Tipo | Descrizione | Pagina |');
  lines.push('|------------|------|-------------|--------|');

  for (const model of models) {
    const type = model.subComponents?.length > 0 ? 'Composito' : 'Semplice';
    const desc = model.description || '⚠️ Mancante';
    const pageFile = kebabCase(model.name) + '.md';

    lines.push(`| \`${model.name}\` | ${type} | ${desc} | [→ ${pageFile}](./components/${pageFile}) |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Build Status');
  lines.push('');
  lines.push('| Componente | Descrizione | Props | Esempio Usage | Storybook |');
  lines.push('|------------|-------------|-------|---------------|-----------|');

  for (const model of models) {
    const descStatus = model.description ? '✅' : '⚠️';
    const propsStatus = model.props?.length > 0 ? `✅ ${model.props.length} props` : '⚠️';
    const usageStatus = model.usageExample ? '✅' : '⚠️';
    const storyStatus = model.storybookUrl ? '✅' : '⚠️';

    lines.push(`| \`${model.name}\` | ${descStatus} | ${propsStatus} | ${usageStatus} | ${storyStatus} |`);
  }

  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('## Come aggiornare la documentazione');
  lines.push('');
  lines.push('```bash');
  lines.push('npm run docs');
  lines.push('```');

  return lines.join('\n');
}

/**
 * Converts PascalCase to kebab-case
 * @param {string} str
 * @returns {string}
 */
function kebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}