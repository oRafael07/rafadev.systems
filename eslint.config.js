const tseslint = require('typescript-eslint')

module.exports = tseslint.config(
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**'],
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  }
)
