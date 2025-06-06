export const importRules = {
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
};
