export default {
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'], // Встроенные модули (например, path) и внешние (например, react)
          ['internal'], // Внутренние модули проекта
          ['parent', 'sibling', 'index'], // Родительские, соседние файлы, файлы index.js
        ],
        pathGroups: [
          {
            pattern: '@/**', // Абсолютные импорты через alias
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '**/*.scss', // SCSS-стили
            group: 'index',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always', // Всегда разделять группы новой строкой
        alphabetize: {
          order: 'asc', // Импорты в алфавитном порядке
          caseInsensitive: true, // Без учета регистра
        },
      },
    ],
  },
};
