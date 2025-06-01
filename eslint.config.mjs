import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';

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
    plugins: { 'react-hooks': reactHooks, prettier },
    rules: {
      // typescript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/consistent-type-imports': [
        //TODO: Разобраться
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports', disallowTypeAnnotations: false },
      ],
      // prettier
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          singleQuote: true,
          jsxSingleQuote: true,
          semi: true,
          experimentalTernaries: true,
          experimentalOperatorPosition: 'end',
          printWidth: 120,
          bracketSpacing: true,
          trailingComma: 'all',
          objectWrap: 'collapse',
          bracketSameLine: false,
          singleAttributePerLine: true,
        },
      ],
      // importPlugin
      'import/no-deprecated': 'warn',
      'import/no-empty-named-blocks': 'warn',
      'import/no-mutable-exports': 'warn',
      'import/order': [
        'error',
        {
          // Основные группы импортов (в порядке приоритета)
          groups: [
            'builtin', // Встроенные модули Node.js
            'external', // Внешние зависимости (node_modules)
            'internal', // Внутренние пути (@/ и т.д.)
            ['parent', 'sibling'], // Группировка родственных импортов
            'index', // Импорты из index-файлов
            'object', // Импорты-объекты (редко используется)
            'type', // Импорты типов (TypeScript)
          ],
          // Настройки алфавитной сортировки
          alphabetize: {
            order: 'asc', // "asc" (A-Z) или "desc" (Z-A)
            caseInsensitive: true, // Игнорировать регистр букв
          },
          // Пустые строки между группами
          'newlines-between': 'always', // Варианты: "always"/"never"/"always-and-inside-groups"
          warnOnUnassignedImports: false, // Предупреждать, если импорт не попал ни в одну группу
          distinctGroup: false, // Разделять type imports в отдельную группу
          // Кастомные группы через паттерны
          pathGroups: [
            {
              pattern: 'react', // Отдельная группа для React
              group: 'external',
              position: 'before', // Разместить перед другими external
            },
            {
              pattern: '@/**', // Alias проекта
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '*.{scss,css}', // CSS-модули
              group: 'index',
              patternOptions: { matchBase: true }, // Учитывать расширения
            },
          ],
        },
      ],
      // i18n
      // 'i18next/no-literal-string': 'warn',
      // eslint
      'no-console': 'warn',
      'array-callback-return': 'error',
      'no-await-in-loop': 'error',
      'no-inner-declarations': 'error',
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-useless-assignment': 'error',
      'block-scoped-var': 'error',
      'class-methods-use-this': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'default-param-last': 'error',
      'func-name-matching': 'error',
      'func-names': 'error',
      'new-cap': 'error',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-extra-bind': 'error',
      'no-implied-eval': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-param-reassign': 'error',
      'no-magic-numbers': [
        'error',
        {
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          ignoreClassFieldInitialValues: true,
          enforceConst: true,
          ignore: [
            -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3001, 200, 201, 202, 300, 301, 302,
            303, 400, 401, 402, 403, 404, 500, 501, 502, 503, 504,
          ],
        },
      ],
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'no-else-return': ['error', { allowElseIf: false }],
      'max-depth': ['error', 5],
      'max-nested-callbacks': ['error', 2],
      'max-params': ['error', 5],
      'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
      'max-lines-per-function': ['warn', { max: 150, skipBlankLines: true, skipComments: true }],
      'logical-assignment-operators': ['error', 'never'],
      'max-classes-per-file': ['error', 1],
      'id-denylist': ['error', 'res', 'err', 'e', 'cb', 'cur', 'acc', 'el', 'elem', 'val'],
      'id-length': ['error', { min: 1 }],
      'func-style': ['error', 'expression'],
      complexity: ['error', 10],
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always'],
      camelcase: ['error', { properties: 'never' }],
      'no-multi-str': 'warn',
      'no-nested-ternary': 'warn',
      'no-negated-condition': 'warn',
      'no-eval': 'warn',
      'no-template-curly-in-string': 'warn',
      'no-unmodified-loop-condition': 'warn',
      'no-unreachable-loop': 'warn',
      'accessor-pairs': 'warn',
      // react
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/button-has-type': 'error',
      'react/checked-requires-onchange-or-readonly': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-closing-tag-location': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-curly-newline': 'error',
      'react/jsx-equals-spacing': 'error',
      'react/jsx-no-leaked-render': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-spread-multi': 'error',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-closing-bracket-location': 'error',
      'react/no-array-index-key': 'error',
      'react/jsx-sort-props': [
        'error',
        {
          noSortAlphabetically: true,
          ignoreCase: true,
          callbacksLast: true,
          shorthandLast: true,
          multiline: 'first',
          reservedFirst: ['key', 'ref'],
        },
      ],
      'react/destructuring-assignment': ['error', 'always'],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
      'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
      'react/jsx-newline': ['error', { prevent: true, allowMultilines: false }],
      'react/jsx-key': [
        'error',
        { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true },
      ],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
      'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'], ignoreFilesWithoutCode: true }],
      'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
      'react/jsx-props-no-multi-spaces': 'warn',
      'react/jsx-tag-spacing': 'warn',
      'react/jsx-wrap-multilines': 'warn',
      'react/jsx-one-expression-per-line': ['warn', { allow: 'non-jsx' }],
      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-handler-names': ['warn', { checkLocalVariables: false, checkInlineFunction: true }],
      'react/jsx-curly-spacing': [
        'warn',
        { when: 'never', allowMultiline: true, children: true, spacing: { objectLiterals: 'never' } },
      ],
    },
  },
];

export default eslintConfig;
