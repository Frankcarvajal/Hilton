import React from 'react'
import ReactDOM from 'react-dom'
import ManagerFeedback from '../../views/ManagerFeedback/ManagerFeedback'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ManagerFeedback />, div)
  ReactDOM.unmountComponentAtNode(div)
})
