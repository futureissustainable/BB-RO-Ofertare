export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'script',
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        history: 'readonly',
        console: 'readonly',
        URLSearchParams: 'readonly',
        FileReader: 'readonly',
        Promise: 'readonly',
        Array: 'readonly',
        Object: 'readonly',
        Math: 'readonly',
        String: 'readonly',
        parseFloat: 'readonly',
        parseInt: 'readonly',
        isNaN: 'readonly',
        setTimeout: 'readonly',
        html2canvas: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'eqeqeq': ['warn', 'always'],
      'no-var': 'warn',
      'prefer-const': 'warn',
      'no-console': 'off'
    }
  },
  {
    ignores: ['node_modules/**', 'dist/**', 'src/**', 'scripts/**', '*.ts', '*.bak']
  }
];
