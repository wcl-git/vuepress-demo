#### 文档部署

* 1.先安装安装tnpm

``` js
npm install tnpm -g --registry=http://registry.npm.alibaba-inc.com
```
* 2.本地构建，先安装yarn(安装地址:https://yarnpkg.com/zh-Hans/)

``` js
yarn install
yarn build
```

* 3.安装蜻蜓(安装过跳过此步骤)

``` js
tnpm install @alipay/qingting -g
```
* 4.发布（登录蜻蜓需要输入自己的域账号）

``` js
qt login
qt scp ./seenew xiniuyiliao
```
