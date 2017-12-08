import React, { Component } from 'react'
import { render } from 'react-dom'
import DetailPageCreate from 'detail-page-create'

class ExamplePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <DetailPageCreate dataStrcut={[]} data={{}} />
      </div>
    )
  }
}

render(<ExamplePage />, document.querySelector('#app'))
