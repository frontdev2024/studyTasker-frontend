import { dirname } from 'path';
import { fileURLToPath } from 'url';

import reactHooks from 'eslint-plugin-react-hooks';

import { FlatCompat } from '@eslint/eslintrc';
import boundaries from 'eslint-plugin-boundaries';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';

import boundariesConfig from './configs/lints/boundaries.config.js';
import importsConfig from './configs/lints/imports.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next'),
  ...compat.extends('plugin:jsx-a11y/recommended'),
  ...compat.extends('plugin:react-hooks/recommended'),
  ...compat.extends('plugin:import/recommended'),
  ...compat.extends('plugin:prettier/recommended'),
  {
    plugins: { boundaries, 'react-hooks': reactHooks, import: importPlugin, prettier },
    rules: {
      'prettier/prettier': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-console': 'error',
      ...boundariesConfig.rules,
      // ...importsConfig.rules,
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      ...boundariesConfig.settings,
    },
  },
];

export default eslintConfig;
