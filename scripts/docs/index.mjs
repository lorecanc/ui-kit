/**
 * Entry point for the documentation pipeline.
 * Orchestrates: parse → validate → template → write
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { parseComponents } from './parser.mjs';
import { generateComponentPage, generateIndexPage } from './template.mjs';
import { validateModel } from './models.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const DOCS_DIR = path.join(ROOT_DIR, 'docs');
const COMPONENTS_DIR = path.join(DOCS_DIR, 'components');

async function main() {
  console.log('🔍 Parsing components...');

  let models;
  try {
    models = await parseComponents();
  } catch (err) {
    console.error('❌ Parse error:', err.message);
    process.exit(1);
  }

  console.log(`✅ Parsed ${models.length} components`);
  console.log('');

  const warnings = [];
  for (const model of models) {
    const result = validateModel(model);
    if (result.warnings.length > 0) {
      warnings.push(...result.warnings);
    }
  }

  if (warnings.length > 0) {
    console.warn('⚠️ Validation warnings:');
    for (const w of warnings) {
      console.warn(`  - ${w}`);
    }
    console.warn('');
  }

  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }

  if (!fs.existsSync(COMPONENTS_DIR)) {
    fs.mkdirSync(COMPONENTS_DIR, { recursive: true });
  }

  console.log('📝 Generating component pages...');

  for (const model of models) {
    const markdown = generateComponentPage(model);
    const fileName = toKebabCase(model.name) + '.md';
    const filePath = path.join(COMPONENTS_DIR, fileName);

    fs.writeFileSync(filePath, markdown, 'utf-8');
    console.log(`  ✓ ${fileName}`);
  }

  console.log('');
  console.log('📋 Generating index page...');

  const indexMarkdown = generateIndexPage(models);
  fs.writeFileSync(path.join(DOCS_DIR, 'index.md'), indexMarkdown, 'utf-8');
  console.log('  ✓ docs/index.md');

  console.log('');
  console.log('✅ Documentation generated successfully!');
  console.log(`   Components: ${models.length}`);
  console.log(`   Output: docs/components/*.md + docs/index.md`);
}

function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

main().catch(err => {
  console.error('❌ Fatal error:', err);
  process.exit(1);
});