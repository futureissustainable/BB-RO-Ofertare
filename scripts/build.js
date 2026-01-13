/**
 * Build script for BioBuilds Offer Generator
 * Bundles TypeScript output into a single script.js for Webflow
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const outputFile = join(__dirname, '..', 'script.js');

// Simple bundler - concatenate all JS files in correct order
const files = [
  'types.js',
  'constants.js',
  'utils.js',
  'translations.js',
  'data.js',
  'main.js'
];

let bundle = '// BioBuilds Offer Generator - Bundled\n';
bundle += '// Generated: ' + new Date().toISOString() + '\n\n';
bundle += '(function() {\n"use strict";\n\n';

for (const file of files) {
  try {
    const content = readFileSync(join(distDir, file), 'utf8');
    // Remove export/import statements for browser compatibility
    const cleaned = content
      .replace(/^export\s+/gm, '')
      .replace(/^import\s+.*?;?\n/gm, '')
      .replace(/export\s*{\s*.*?\s*};?\n?/g, '');
    bundle += `// === ${file} ===\n${cleaned}\n\n`;
  } catch (e) {
    console.warn(`Warning: Could not read ${file}`);
  }
}

bundle += '})();\n';

writeFileSync(outputFile, bundle);
console.log(`Bundle written to ${outputFile}`);
