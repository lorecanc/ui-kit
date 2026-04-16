/**
 * @typedef {Object} PropDoc
 * @property {string} name - Nome della prop (es. "variant")
 * @property {string} type - Tipo già sanitizzato (es. '"default" | "outline"')
 * @property {string|undefined} defaultValue - Valore di default estratto da JSDoc @default o da CVA
 * @property {boolean} required - true se la prop non ha default e non è opzionale
 * @property {string} description - Testo estratto da JSDoc @param o dal commento inline
 */

/**
 * @typedef {Object} ComponentDocModel
 * @property {string} name - Nome del componente React (PascalCase, es. "Button")
 * @property {string} filePath - Path relativo alla root del progetto (es. "src/components/ui/button.tsx")
 * @property {string} description - Descrizione estratta dal JSDoc del componente
 * @property {string} storybookUrl - URL completo alla storia Storybook corrispondente
 * @property {string} usageExample - Snippet TSX pronto all'uso, estratto da @example o generato
 * @property {PropDoc[]} props - Array di tutte le props documentate
 * @property {ComponentDocModel[]} [subComponents] - Sub-components dello stesso file (non un pattern namespace oggetto)
 */

/**
 * @typedef {Object} ValidationResult
 * @property {boolean} valid
 * @property {string[]} warnings
 */

/**
 * Validates a ComponentDocModel and returns warnings for missing/invalid fields.
 * Does not throw — warnings are collected and returned.
 * @param {ComponentDocModel} model
 * @returns {ValidationResult}
 */
export function validateModel(model) {
  const warnings = [];

  if (!model.name || !/^[A-Z]/.test(model.name)) {
    warnings.push(`[${model.name ?? 'unknown'}] name non è PascalCase o è vuoto`);
  }

  if (!model.filePath) {
    warnings.push(`[${model.name}] filePath mancante`);
  }

  if (!model.description) {
    warnings.push(`[${model.name}] description assente — aggiungere JSDoc @description`);
  }

  if (model.storybookUrl && !/^https?:\/\//.test(model.storybookUrl)) {
    warnings.push(`[${model.name}] storybookUrl non è un URL valido: ${model.storybookUrl}`);
  }

  if (!Array.isArray(model.props)) {
    warnings.push(`[${model.name}] props non è un array`);
  }

  if (model.subComponents) {
    for (const sub of model.subComponents) {
      const subResult = validateModel(sub);
      warnings.push(...subResult.warnings.map(w => `  → ${w}`));
    }
  }

  return {
    valid: warnings.length === 0,
    warnings,
  };
}

/**
 * Strips import paths and React namespace from TypeScript type strings.
 * @param {string} rawType
 * @returns {string}
 */
export function sanitizeType(rawType) {
  const transformations = [
    (t) => t.replace(/import\("[^"]+"\)\./g, ''),
    (t) => t.replace(/React\./g, ''),
    (t) => t.replace(/\s+/g, ' ').trim(),
    (t) => t.replace(/\bstring\b/, 'string'),
    (t) => t.replace(/\bboolean\b/, 'boolean'),
    (t) => t.replace(/\bnumber\b/, 'number'),
    (t) => t.replace(/\bundefined\b/, 'undefined'),
    (t) => t.replace(/\bnull\b/, 'null'),
    (t) => t.replace(/\bvoid\b/, 'void'),
    (t) => t.replace(/\bnever\b/, 'never'),
    (t) => t.replace(/\bany\b/, 'any'),
    (t) => t.replace(/\bunknown\b/, 'unknown'),
  ];

  return transformations.reduce((type, fn) => fn(type), rawType);
}