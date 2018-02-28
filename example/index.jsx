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
        label: '姓名:',
      },
      {
        name: 'id',
        label: 'ID:',
        layout: {
          labelCol: 2,
          contentCol: 2,
        }
      },
      {
        name: 'tel',
        label: '电话:',
        render: (d, data) => {
          return 'xxx'
        }
      },
      {
        name: 'mail',
        label: '邮箱:',
      },
    ]
  }

  render() {
    return (
      <div>
        <DetailPageCreate
          rowStyle={{background: '#ccc'}}
          style={{margin: '20px'}}
          dataStrcut={this.dataStrcut}
          data={this.state.data}
        />
      </div>
    )
  }
}

render(<ExamplePage />, document.querySelector('#app'))
