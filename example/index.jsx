import React, { Component } from 'react'
import { render } from 'react-dom'
import ImgPreview from 'detail-page-create'

class ExamplePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div></div>
    )
  }
}

render(<ExamplePage />, document.querySelector('#app'))
