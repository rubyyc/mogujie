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

## REM 响应式的方案

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

## 多色图标的使用 SVGICON

[IconPark 多色图标库](https://iconpark.oceanengine.com/home).

### 安装 @icon-park/vue-next

```
npm install @icon-park/vue-next --save
```

## 中文字体压缩-字蛛

[字体压缩](https://github.com/aui/font-spider).

## filter 滤镜的使用

```
blur(50px) 高斯模糊
brightness(100%) 提亮
grayscale(50%) 灰度效果
sepia(80%) 褐色效果
```

## CSS Modules 的使用

```
<style module>
.page {
	font-size: 26px;
}
.color {
	color: red;
}
</style>

<template>
  <div :class="$style.page">
    <div :class="$style.color">Module</div>
  </div>
</template>
```

## CSS in JS 混合代码

## CSS实现视差滚动

```
perspective: 1px;
transform: translateZ(-1px) scale(2);
```

## CSS高性能动画
[CSS渲染经历的过程](https://csstriggers.com/).


### GPU加速

```
# 触发的相关属性
3d,perspective,transform
animation,transition改变opacity,transform
video,canvas,flash,css filters等
```

### requestAnimationFrame

```
1s/60fps = 16.7ms ,准备60帧,位图
自动调节频率,一个间隔时间内只有一帧

<div id="box">

</div>
<script>
  var box = document.getElementById("box")
  
  requestAnimationFrame(function(){
    setInterval(function(){
      var top = parseInt(box.offsetTop);
      box.style.top = (top - 1)+'px';
    })
  })
</script>  
```

### 优化16ms

```
// 触发Layout 查 CSS trrigers(因此避免)
// 改变width, height, margin等和大小、位置相关的属性
// 读取size, position相关得属性

 
// 读取这些属性会引起layout(因此避免)
// clientHeight, clientLeft, clientTop, clientWidth, focus(), getBoundingClientRect(), getClientRects(), innerText, offsetHeight, offsetLeft, offsetParent, offsetTop, offsetWidth, outerText, scrollByLines(), scrollByPages(), scrollHeight, scrollIntoView(), scrollIntoViewIfNeeded(), scrollLeft, scrollTop, scrollWidth .....

 // 如何解决呢
// 尽量使用transform代替top, left的动画

// 先读后写
// Read
var h1 = element1.clientHeight;
var h2 = element2.clientHeight;
var h3 = element3.clientHeight;

// Write
element1.style.height = (h1 * 2) + 'px';
element2.style.height = (h2 * 2) + 'px';
element3.style.height = (h3 * 2) + 'px';
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
