module.exports = {
  extends: ['react-app', 'prettier', 'plugin:security/recommended'],
  plugins: ['prettier', 'promise', 'flowtype', 'security'],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'],
    'react/prop-types': 'off',
    'no-undef': 'warn',
    'no-console': 'warn',
    'no-unused-vars': [1, { argsIgnorePattern: 'res|next|^err' }],
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-return-in-finally': 'warn',
  },
  "globals": {
    "REACT_APP_CONFIG": true,
  },
  settings: {
    // Only use the flow linter for files with `@flow`
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
  },
  parserOptions: {
    // Required to support import/export syntax when using types
    sourceType: 'module',
  },
};
