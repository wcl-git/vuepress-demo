### Bread 面包屑

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
 import { Bread } from '@ali/profrontend';
```

### API

|参数            |说明          | 类型  |  默认值  |
|----------------|-------------| -----|--------|
|    content     | 面包屑的内容   | Array | []      |
|    extra       | 额外          |   any |          |     

### 代码实例

``` js
import React from 'react';
import { Bread } from '@ali/profrontend';

const Test = () => {
  return <div>123</div>;
};

class My extends React.Component {
  render() {
    return (
      <div className="uniform-cpnt-My">
        <Bread content={['title']} extra={Test}/>
      </div>
    );
  }
}
```