module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'google', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': [0], // 不强制要求命名使用多字
    'vue/component-definition-name-casing': [2, 'kebab-case'], // 组件命名必须使用连字符连接的多字
    'max-len': [1, { code: 120 }],
    'no-unused-vars': [1], // 警告未使用的
    // 'vue/max-len': [
    //   0,
    //   {
    //     code: 120,
    //     template: 80,
    //     tabWidth: 2,
    //     comments: 80,
    //     ignorePattern: '',
    //     ignoreComments: false,
    //     ignoreTrailingComments: false,
    //     ignoreUrls: false,
    //     ignoreStrings: false,
    //     ignoreTemplateLiterals: false,
    //     ignoreRegExpLiterals: false,
    //     ignoreHTMLAttributeValues: false,
    //     ignoreHTMLTextContents: false,
    //   },
    // ],
    'object-curly-spacing': [1, 'always'], // {} 间距
  },
};
