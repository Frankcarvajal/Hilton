import React from 'react'
import ReactDOM from 'react-dom'
import HotelReviews from './HotelReviews'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HotelReviews />, div)
  ReactDOM.unmountComponentAtNode(div)
})
