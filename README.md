# smartisan

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



src:
  assets: 存放样式文件和图片
  components: 组件
  lib: 模拟数据
  router: 路由配置文件
  views: vue相关文件
  
  
step1：
  商品列表页的布局
    导航：
      头部导航， 会出现在所有页面中， 是一个公共组件
    商品列表：
  
  商品简介作为一个组件， 通过父级向自己传递数据
  
  组件之间的数据传递：
  
