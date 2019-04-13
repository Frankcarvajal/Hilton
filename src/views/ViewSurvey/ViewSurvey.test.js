import React from 'react'
import ReactDOM from 'react-dom'
import ViewSurvey from './ViewSurvey'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ViewSurvey />, div)
  ReactDOM.unmountComponentAtNode(div)
})
