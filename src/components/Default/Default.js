import './default.css'

import React, { Component } from 'react'
import logo from './logo.svg'

// This is from CRA, could just delete from Dir to be honest...

export default class Default extends Component {
  render () {
    return (
      <div className='default'>
        <header className='default-header'>
          <img src={logo} className='default-logo' alt='logo' />
        </header>
      </div>
    )
  }
}
