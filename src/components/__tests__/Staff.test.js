import React from 'react'
import ReactDOM from 'react-dom'
import Staff from '../../views/Staff/Staff'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Staff />, div)
  ReactDOM.unmountComponentAtNode(div)
})
