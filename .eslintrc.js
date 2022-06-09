module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier',

    // VUE

    //'plugin:vue/essential', //LV2
    //'eslint:recommended',
  ],

  //extends: ['plugin:prettier/recommended'],
  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', //빈 태그 항상 /셀프클로징
          normal: 'never', //일반태그는 제외
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],

    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
