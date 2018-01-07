# detail-page-create

## 介绍
通过配置快速生成详情页
## 安装
```
$ npm install detail-page-create --save
```
## 使用
```
import React, { Component } from 'react'
import { render } from 'react-dom'
import DetailPageCreate from 'detail-page-create'

class ExamplePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        name: 'wry',
        id: '12asdvhbadsjvbhjkasdvkjahsdvkajsdkjsda3',
        tel: '111111',
        mail: '11@11.com',
      },
    }
    this.dataStrcut = [
      {
        name: 'name',
        label: '姓名',
      },
      {
        name: 'id',
        label: 'ID',
        layout: {
          labelCol: 2,
          contentCol: 2,
        }
      },
      {
        name: 'tel',
        label: '电话',
      },
      {
        name: 'mail',
        label: '邮箱',
      },
    ]
  }

  render() {
    return (
      <div>
        <DetailPageCreate dataStrcut={this.dataStrcut} data={this.state.data} />
      </div>
    )
  }
}

render(<ExamplePage />, document.querySelector('#app'))
```
## 配置
```
dataStruct: 数据展示的模版
data: 详细数据
```