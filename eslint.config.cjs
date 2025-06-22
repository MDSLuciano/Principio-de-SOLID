const js = require('@eslint/js');
const parser = require('@typescript-eslint/parser');
const plugin = require('@typescript-eslint/eslint-plugin');
const prettier = require('eslint-plugin-prettier');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        console: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
      prettier,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'prettier/prettier': 'error',
    }
  },
];
