import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  Card
} from '../../components'

/*
  * There once was a man who dreamt of a greater life.
  * What would a greater life be for this man in his dream?
  * Well, it's funny you ask, He dreamt every night of having more time.
  * You see, this young man wanted the Hilton job, but he didn't have enough time
  * Because of spending so much time on other things, Figure B suffered
  *
  * Due to this lack of time, His last component DynamicForm was GHETTO, SKETCHY, & DARK!
  * He shall not speak of this to any recruiter again, for it was a dark evening.
  *
  * Thank you for your time in reviewing my code, if I had more time this would not just work, it would be clean, not scrappy, & what I wanted. But it's been 4 hours and I need to rest for daddy-daughter saturday date day tomorrow. Have a great one!
*/

class DynamicForm extends Component {
  static propTypes = {
  }

  state = {
    roomTwoEnabled: false,
    roomThreeEnabled: false,
    roomFourEnabled: false
  }

  onChange = e => {
    console.log('event: ', e.target.checked)
  }

  onSelect = e => {
    console.log('select event: ', e.target.value)
  }

  toggleRoom = (e, room, precendingRoom, precendingRoomAnother) => {
    const { roomTwoEnabled, roomThreeEnabled } = this.state

    if (room === 'roomThreeEnabled') {
      if (!roomTwoEnabled) {
        this.setState({
          [room]: !this.state[room],
          [precendingRoom]: !this.state[precendingRoom]
        })
      }
    } else if (room === 'roomFourEnabled') {
      if (!roomTwoEnabled && !roomThreeEnabled) {
        this.setState({
          [room]: !this.state[room],
          [precendingRoom]: !this.state[precendingRoom],
          [precendingRoomAnother]: !this.state[precendingRoomAnother]
        })
      }
    }

    this.setState({
      [room]: !this.state[room]
    })
  }

  render () {
    return (
      <DynamicForm.Styled className='dynamic-form-view-component'>
        <header className='dynamicform-header'>
          <h1>Test II: A Dynamic Form</h1>
        </header>

        <Card className='form-wrapper'>
          <form className='form' onChange={this.onSelect}>
            <Card className='form-rooms'>
              <h1>Room 1</h1>
              <label>Adults (18+)</label>
              <select>
                <option defaultValue='1'>1</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>

              <label>Children (0-17)</label>
              <select>
                <option defaultValue='0'>0</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </Card>

            <Card className='form-rooms'>
              <span className='form-room-header'>
                <input
                  type='checkbox'
                  id='room-2'
                  name='room two'
                  checked={this.state.roomTwoEnabled}
                  onClick={e => this.toggleRoom(e, 'roomTwoEnabled')}
                />
                <h1>Room 2</h1>
              </span>
              <label>Adults (18+)</label>
              <select disabled={!this.state.roomTwoEnabled} >
                <option defaultValue='1'>1</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>

              <label>Children (0-17)</label>
              <select disabled={!this.state.roomTwoEnabled} >
                <option defaultValue='0'>0</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </Card>
            <Card className='form-rooms'>
              <span className='form-room-header'>
                <input
                  type='checkbox'
                  id='room-3'
                  name='room three'
                  checked={this.state.roomThreeEnabled}
                  onClick={e => this.toggleRoom(e, 'roomThreeEnabled', 'roomTwoEnabled')}
                />
                <h1>Room 3</h1>
              </span>
              <label>Adults (18+)</label>
              <select disabled={!this.state.roomThreeEnabled} >
                <option defaultValue='1'>1</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>

              <label>Children (0-17)</label>
              <select disabled={!this.state.roomThreeEnabled} >
                <option defaultValue='0'>0</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </Card>
            <Card className='form-rooms'>
              <span className='form-room-header'>
                <input
                  type='checkbox'
                  id='room-4'
                  name='room four'
                  checked={this.state.roomFourEnabled}
                  onClick={e => this.toggleRoom(e, 'roomFourEnabled', 'roomThreeEnabled', 'roomTwoEnabled')}
                />
                <h1>Room 4</h1>
              </span>
              <label>Adults (18+)</label>
              <select disabled={!this.state.roomFourEnabled} >
                <option defaultValue='1'>1</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>

              <label>Children (0-17)</label>
              <select disabled={!this.state.roomFourEnabled} >
                <option defaultValue='0'>0</option>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </Card>
            <input className='form-submit' type='submit' value='Submit' />
          </form>
        </Card>
      </DynamicForm.Styled>
    )
  }
}

DynamicForm.Styled = styled.div`
  width: 1180px;

  .dynamic-form-view-component {
    height: 480px;
  }

  .dynamicform-header {
    display: flex;
    flex-direction: row;

    h1 {
      flex: 1;
    }
  }

  .form-wrapper {
    display: flex;
    flex-direction: row;
    height: 480px;
  }

  .form-rooms {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 5%;
    justify-content: center;
    text-align: center;

    > h1 {
        margin: 0 auto;
      }

    > label {
      padding: 15px;
    }

    > select {
      padding: 10px;
    }
  }

    .form {
      display: flex;
      flex-direction: row;
      flex: 1;
    }

    .form-room-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: center;

      > h1 {
        margin: 0 auto;
      }
    }

    .form-submit {
      padding: 15px;
    }
  }
`

export default DynamicForm
