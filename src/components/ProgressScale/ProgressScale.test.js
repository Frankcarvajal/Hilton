import React from 'react'
import ReactDOM from 'react-dom'
import ProgressScale from './ProgressScale'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ProgressScale />, div)
  ReactDOM.unmountComponentAtNode(div)
})
