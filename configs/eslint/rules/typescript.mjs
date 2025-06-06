export const typescriptRules = {
  '@typescript-eslint/no-unused-vars': 'warn',
  '@typescript-eslint/consistent-type-imports': [
    //TODO: Разобраться
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'separate-type-imports',
      disallowTypeAnnotations: false,
    },
  ],
};
