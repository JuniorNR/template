import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import fsdImportPlugin from 'eslint-plugin-fsd-import';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';

import { eslintRules } from './configs/eslint/rules/eslint.mjs';
import { importRules } from './configs/eslint/rules/import.mjs';
import { prettierRules } from './configs/eslint/rules/prettier.mjs';
import { reactRules } from './configs/eslint/rules/react.mjs';
import { typescriptRules } from './configs/eslint/rules/typescript.mjs';
import { fsdImportRules } from './configs/eslint/rules/fsdImport.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next',
    'plugin:@next/next/recommended',
    'next/typescript',
    'plugin:import/recommended',
    'prettier',
  ),
  {
    ...jsxA11y.flatConfigs.strict,
    ...importPlugin.flatConfigs.recommended,
    plugins: {
      'react-hooks': reactHooks,
      prettier,
      'fsd-import': fsdImportPlugin,
    },
    rules: {
      ...eslintRules,
      ...reactRules,
      ...typescriptRules,
      ...prettierRules,
      ...importRules,
      ...fsdImportRules,
      // i18n
      // 'i18next/no-literal-string': 'warn',
    },
  },
];

export default eslintConfig;
