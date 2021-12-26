module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 0,
    "linebreak-style": 0,
    "object-curly-spacing": "off",
    'operator-linebreak': 0,
    "prefer-template": false
  },
};
