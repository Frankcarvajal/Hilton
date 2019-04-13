import React from 'react'
import ReactDOM from 'react-dom'
import HotelDetails from './HotelDetails'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HotelDetails />, div)
  ReactDOM.unmountComponentAtNode(div)
})
