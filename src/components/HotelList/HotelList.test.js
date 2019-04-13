import React from 'react'
import ReactDOM from 'react-dom'
import HotelList from './HotelList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<HotelList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
