# 本项目的知识点记录

## 安装 axios

```
npm install axios
```

### 相关文档

[axios 文档](https://axios-http.com/zh/docs/intro).

## 安装 mockjs

```
npm install mockjs
```

### 相关文档

[mockjs 文档](https://github.com/nuysoft/Mock/wiki).

## 编辑器配置(.editorconfig.js)

```
[*.{js,jsx,ts,tsx,vue}]
indent_style = tab
indent_size = 2
trim_trailing_whitespace = true
insert_final_newline = true
```

## 编辑器 eslint(..eslintrc.js)

```
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-tabs': 'off'
  }
}

```

## REM响应式的方案

### 安装相关包
```
npm install lib-flexible
npm install postcss-plugin-px2rem -D
```

### 配置

```
# main.js
import 'lib-flexible/flexible.js'
```

```
# vue.config.js
import 'lib-flexible/flexible.js'
```

## 多色图标的使用SVGICON

[IconPark多色图标库](https://iconpark.oceanengine.com/home).

### 安装  @icon-park/vue-next

```
npm install @icon-park/vue-next --save
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装 axios

```
npm install axios
```

## 安装

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
