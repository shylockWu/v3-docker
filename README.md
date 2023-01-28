# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

# 代码规范
## vscode 自定义配置
根目录下创建.vscode文件夹，里面创建setting.json文件，写入以下代码
```json
{
  // 开启后就能使用默认的格式化工具进行格式化
  "editor.formatOnSave": true,
  // auto
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  // 需要项目的prettier文件
  "prettier.requireConfig": true,
}
```
---
## 安装Prettier
- `yarn add prettier -D` 将提供的（如下图文件内容）.prettierrc 粘贴到项目中，随后可以使用命令 npx prettier --write 格式化所有的文件

> Tip! Base your .prettierignore on .gitignore and .eslintignore (if you have one).

> Another tip! If your project isn’t ready to format, say, HTML files yet, add \*.html.

.prettierrc.json文件内容
```js
{
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,
  "semi": true
}
```
---
## 安装Eslint
- `yarn add eslint -D`，执行命令 `npx eslint --init`
  - How would you like to use ESLint? （你想如何使用 ESLint?）
    - To check syntax, find problems, and enforce code style（检查语法、发现问题并强制执行代码风格）
  - What type of modules does your project use?（你的项目使用哪种类型的模块?）
    - JavaScript modules (import/export)
  - Which framework does your project use? （你的项目使用哪种框架?）
    - Vue.js
  - Does your project use TypeScript?（你的项目是否使用 TypeScript？）
    - Yes
  - Where does your code run?（你的代码在哪里运行?）
    - Browser
  - How would you like to define a style for your project?（你想怎样为你的项目定义风格？）
    - Use a popular style guide（使用一种流行的风格指南）
  - Which style guide do you want to follow?（你想遵循哪一种风格指南?）
    - Google
  - What format do you want your config file to be in?（你希望你的配置文件是什么格式?）
    - JavaScript
  - Would you like to install them now with npm?
    - Yes

- eslint会在项目根目录下自动生成 `.eslintrc.js` 配置文件，也可能为cjs后缀
---
## 解决Prettier和Eslint冲突
- `yarn add eslint-plugin-prettier eslint-config-prettier -D`

eslint-plugin-prettier #	将 Prettier 的规则设置到 ESLint 的规则中。

eslint-config-prettier #	关闭 ESLint 中与 Prettier 中会发生冲突的规则。

然后，将`prettier`添加到 `.eslintrc.*`文件中的 `extends`数组中。确保将其放在最后，这样它就有机会覆盖其他配置。

```js
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```
---
## 添加忽略文件
`.gitignore`
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```
`.eslintignore`
```
# 可自定义填写
/.vscode
/node_modules
/build
coverage
/public
README.md
```
`.prettierignore`
```
# Ignore artifacts:

/.vscode
/node_modules
/build
coverage
/public
README.md
```
