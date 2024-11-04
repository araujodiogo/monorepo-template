import globals from 'globals';
import pluginJs from '@eslint/js';
import rhLint from 'eslint-plugin-react-hooks';
import rLint from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  { ignores: ['node_modules', 'dist'] },
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  {
    plugins: {
      react: rLint,
      'react-hooks': rhLint,
      '@typescript-eslint': tsPlugin,
      import: pluginImport,
      'jsx-a11y': jsxA11y,
      prettier: eslintPluginPrettier,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...rLint.configs.recommended.rules,
      ...rhLint.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,
      ...pluginImport.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,
      'no-console': 'warn',
      'react/no-danger': 'warn',
      'no-nested-ternary': 'warn',
      'no-implicit-globals': 'warn',
      'prefer-const': 'warn',
      'no-else-return': 'warn',
      'no-use-before-define': 'warn',
      'consistent-return': 'warn',
      'no-return-await': 'warn',
      'prettier/prettier': 'error',
      'prefer-template': 'warn',
      'arrow-parens': 'warn',
      'object-shorthand': 'warn',
      'no-var': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
