# 项目基于vue与webpack，集成Typescript，Rxjs

## 一、技术栈

- [x] [Webpack](https://webpack.github.io)
- [x] [Vue](https://facebook.github.io/react/)
- [x] [Typescript](https://www.tslang.cn/)
- [x] [Rxjs](http://cn.rx.js.org/)

## 二、环境搭建
### [Node](https://nodejs.org/) 安装

> 项目基于 Node LTS V6.9.1 版本

推荐使用 [nvm](https://github.com/creationix/nvm) 管理 Node 版本

## 三、快速开始

### 本地开发/测试环境打包/线上环境打包

### 安装

```shell
$ git clone git@github.com:smallcatcat-joe/vue-typescript-rxjs-cli.git
```

### 运行

#### 1. 本地开发

```
$ npm install #安装依赖
$ npm run start # 会根据依赖的增减判断是否需要重新创建dll文件
```

注：bin/dev.sh的脚本是根据依赖的增减来判断是否需要重复构建dll文件，如果增加了一个新的依赖，又删除了一个旧的，因为总的依赖数量不变，所以执行npm start后dll不会重新构建，此时可以删除build文件夹，再重新执行npm start


#### 2. 线上打包（与测试打包相同，测试包，不涉及压缩，用于测试环境下调试）

```
$ npm run prod
```
