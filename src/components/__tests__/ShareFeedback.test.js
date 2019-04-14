import React from 'react'
import ReactDOM from 'react-dom'
import ShareFeedback from '../../views/ShareFeedback/ShareFeedback'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ShareFeedback />, div)
  ReactDOM.unmountComponentAtNode(div)
})
