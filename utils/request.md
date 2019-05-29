### `Request`

### 安装方法
``` js
// 老的组件库 依赖飞冰版本0.x版本   因为飞冰的升级后面停止维护将逐渐弃用
tnpm install @ali/profrontend
// 公共方法
tnpm install @ali/profront-utils
// 新的组件库 依赖飞冰版本1.x版本
tnpm install @ali/profront
// 业务组件库,大家根据自己的工作情况可自由抽离这种业务组件
tnpm install @ali/profront-cmpt
```

### 引用方法

``` js
 import { utils } from '@ali/profrontend'
```

### 方法名称

|方法名                 |说明              |
|---------------------|-----------------|
|    $post           | post请求方式      |
|    $get           | get请求方式      |
|    $ajax           | 复杂性请求方式      |
|    $getScript       | 加载js,css文件      |
|    $socket           | websocket      |


**request**

### 代码实例

``` javascript
import { utils } from '@ali/profrontend';

// post数据交互 以下是三种不同的调用方式 大家各自都有不同的编码风格喜欢哪种就用哪种
utils.$post('xxx.json', {userName:'zhangsan'}, function(resModel, data){
  console.log(resModel)
});

utils.$post('xxx.json', {userName:'zhangsan'}).then(resModel => {
  console.log(resModel)
});

const resModel = await utils.$post('xxx.json', {userName:'zhangsan'});

// get数据交互 与post相同
utils.$get('xxx.json', {userName:'zhangsan'}).then(resModel => {
  console.log(resModel)
});

// 当遇到特殊需求时可以考虑$ajax方法
utils.$ajax({
  url: 'xxx.json',
  type: 'get',
  data: {},
  headers: {},
  beforeSend: function(){

  },
  success: function(resModel){
    console.log(resModel);
  },
  error: function(err){

  },
  complete: function(){

  }
});

// 不需要loading层   special的值有多种'intactModel' 全部数据, 'customTip' 自定义弹框, 'noHeaders' 不需要header头, 'cover' loading层
utils.$ajax({url: 'xxx.json', special: 'cover=false'});

// 加载外部的css样式文件
utils.$getScript('http://www.cdn.xxx.com/base.css');

// 加载外部的脚本文件
utils.$getScript('http://www.cdn.xxx.com/jQuery.js', function(){
  alert('可以调jQuery方法了')
});

// 加载外部的多个脚本文件
utils.$getScript(['http://www.cdn.xxx.com/jQuery.js', 'http://www.cdn.xxx.com/index.js']);

// websocket调用
utils.$socket('ws://www.xxx.com', function(e){
  console.log(e.data)
}); // 实例方法还有open close等方法

// 文件导出/下载
utils.$post('/downfile.json', {userName:'zhangsan'}, 'blob').then(fileData => {
  utils.download(fileData, '文档.xls');
});

```

### 纯方法,大家也都比较熟悉,无效果预览 有不明白的地方单独call我

### Update
2018-05-10

### Author
pro