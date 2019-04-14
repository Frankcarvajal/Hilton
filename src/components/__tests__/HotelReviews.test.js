import React from 'react'
import ReactDOM from 'react-dom'
import HotelReviews from '../../views/HotelReviews/HotelReviews'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HotelReviews />, div)
  ReactDOM.unmountComponentAtNode(div)
})
