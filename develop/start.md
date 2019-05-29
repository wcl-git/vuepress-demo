### 克隆代码

``` js
git clone git@gitlab.alibaba-inc.com:xiniu/profrontend.git
```
::: tip
切一个自己的分支，在自己的分支上开发，开发完成后，联系@周宇或者@刘森进行cr。没有问题后合并到master，发布线上
:::

### 创建组件
* 代码克隆在本地后，在src/pages/lib下创建一个文件夹，用自己的组件命名。在这个文件夹下，创建index.jsx和index.scss。index.jsx的demo如下所示
``` js
import React, { Component } from 'react';
import './index.scss';

class Bread extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        your content
      </div>
    );
  }
}
export default Bread;
```

* 在src/lib.js 将你的组件export出来，demo：

``` js
import Bread from './lib/bread/index';
import LeftRgithLayout from './lib/LeftRgithLayout/index';
import Tip from './lib/tip';
import DeletePopup from './lib/DeletePopup';
import DropSearch from './lib/dropSearch';
import * as utils from './lib/utils';
import LodopPrint from './lib/lodopPrint';

export {
  Bread,
  LeftRgithLayout,
  utils,
  Tip,
  DeletePopup,
  DropSearch,
  LodopPrint,
};
```

### 本地测试

* 在local.jsx引入你的组件
* 本地起动测试服务，命令如下：
``` js
tnpm i
tnpm start
```