import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from '../../enzyme'

import Address from '../Address/Address'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Address />, div)
  ReactDOM.unmountComponentAtNode(div)
})

// Shallow tests, not enough time to write snapshots or do TDD for this.
// Preferrably, I would to TDD because it's higher quality code & fun ^ - ^.
describe('Address tests', () => {
  it('renders the address', () => {
    const address = {
      city: 'Honolulu',
      state: 'HI',
      street: '2005 Kalia Rd',
      unitNumber: '',
      zipCode: '96815'
    }
    const twoLines = false

    const wrapper = shallow(
      <Address
        street={address.street}
        unitNumber={address.unitNumber}
        city={address.city}
        state={address.state}
        zipcode={address.zipcode}
      />
    )

    // For short term, children must exist
    expect(wrapper.find('.address-component').children().exists())
    // Expect that Address will render Street
    expect(wrapper.contains((
      <span>{address.street}{address.unitNumber && ` ${address.unitNumber}`}{twoLines ? <br /> : ', '}</span>
    )))
    // Expect that Address will render CityStateZip
    expect(wrapper.contains((
      <span>{address.city}, {address.state}, {address.state} {address.zipcode}</span>
    )))
  })
})
