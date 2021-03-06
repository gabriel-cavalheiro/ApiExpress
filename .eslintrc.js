module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'no-promise-executor-return': 'off',
    'prefer-const': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePatterm: 'next' }],
  },
};
