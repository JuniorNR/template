export const reactRules = {
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
  'react/jsx-max-props-per-line': [
    'error',
    {
      maximum: 3,
      when: 'multiline',
    },
  ],
  'react/jsx-newline': [
    'error',
    {
      prevent: true,
      allowMultilines: false,
    },
  ],
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    },
  ],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-indent': [
    'error',
    2,
    {
      checkAttributes: true,
      indentLogicalExpressions: true,
    },
  ],
  'react/jsx-filename-extension': [
    'error',
    {
      extensions: ['.ts', '.tsx'],
      ignoreFilesWithoutCode: true,
    },
  ],
  'react/function-component-definition': [
    'error',
    { namedComponents: 'arrow-function' },
  ],
  'react/jsx-props-no-multi-spaces': 'warn',
  'react/jsx-tag-spacing': 'warn',
  'react/jsx-wrap-multilines': 'warn',
  'react/jsx-one-expression-per-line': ['warn', { allow: 'non-jsx' }],
  'react/jsx-no-constructed-context-values': 'warn',
  'react/jsx-first-prop-new-line': ['warn', 'multiline'],
  'react/jsx-handler-names': [
    'warn',
    {
      checkLocalVariables: false,
      checkInlineFunction: true,
    },
  ],
  'react/jsx-curly-spacing': [
    'warn',
    {
      when: 'never',
      allowMultiline: true,
      children: true,
      spacing: { objectLiterals: 'never' },
    },
  ],
}