module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 添加 prettier 插件
  ],
  rules: {
    'no-submodule-imports': ['off', '/@'],
    'no-implicit-dependencies': ['off', ['/@']],
    // 强制组件名称必须为多个单词的组合
    'vue/multi-word-component-names': 'off',
  },
  globals: {
    error: true,
  },
};
