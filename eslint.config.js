import antfu from '@antfu/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default antfu(
  {
    stylistic: true,
    svelte: {
      overrides: {
        'svelte/sort-attributes': 1,
      },
    },
    css: true,
    html: true,
  },
  ...tailwind.configs['flat/recommended'],
  {
    rules: {
      'antfu/top-level-function': 0,
      'import/order': [1, {
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      }],
    },
  },
)
