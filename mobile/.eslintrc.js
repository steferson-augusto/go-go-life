module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', '@react-native-community', 'standard'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsx-a11y',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.png'],
      },
    },
  },
  'import/extensions': [
    'error',
    'always',
    {
      ts: 'never',
      tsx: 'never',
      js: 'never',
      jsx: 'never',
      png: 'never'
    },
  ],
  rules: {
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', {allowTaggedTemplates: true}],
    'react/jsx-filename-extension': [
      'error',
      {extensions: ['.js', '.jsx', '.ts', '.tsx']},
    ],
    'prettier/prettier': 'error',
    'space-before-function-paren': 'off',
    'react/prop-types': 'off',
  },
};
