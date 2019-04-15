import React, { Component } from 'react'
import styled from 'styled-components'

import {
  Card
} from '../../components'

// TODO: Refactor how the disabling of checkboxes go, with more time as well, it's scrappy.
class DynamicForm extends Component {
    state = {
      roomOne: null,
      roomTwo: null,
      roomThree: null,
      roomFour: null,
      options: [0, 1, 2, 3],
      roomTwoEnabled: false,
      roomThreeEnabled: false,
      roomFourEnabled: false
    }

    componentDidMount () {
      // Get all values from local storage & store in a hashTable
      const roomValuesLookup = {
        roomOne: {
          name: 'roomOne',
          value: window.localStorage.getItem('roomOne')
        },
        roomTwo: {
          name: 'roomTwo',
          value: window.localStorage.getItem('roomTwo')
        },
        roomThree: {
          name: 'roomThree',
          value: window.localStorage.getItem('roomThree')
        },
        roomFour: {
          name: 'roomFour',
          value: window.localStorage.getItem('roomFour')
        }
      }

      // Loop through the hashTable & if there is no localStorage value, set default else use the localStorage value that exists & set local component state to the value
      for (let property in roomValuesLookup) {
        if (roomValuesLookup[property] && !roomValuesLookup[property].value) {
          this.setState({
            [roomValuesLookup[property].name]: {
              adults: 1,
              children: 0
            }
          })
        } else {
          const localStorageValue = JSON.parse(roomValuesLookup[property].value)
          const roomEnabled = `${roomValuesLookup[property].name}Enabled`
          this.setState({
            [roomValuesLookup[property].name]: {
              adults: localStorageValue[0],
              children: localStorageValue[1]
            },
            [roomEnabled]: true
          })
        }
      }
    }

    onNewSelect = (e, type, roomNumber) => {
      if (type === 'adults') {
        this.setState({
          [roomNumber]: {
            ...this.state[roomNumber],
            adults: e.target.value
          }
        })
      } else if (type === 'children') {
        this.setState({
          [roomNumber]: {
            ...this.state[roomNumber],
            children: e.target.value
          }
        })
      }
    }

    handleSubmit = e => {
      e.preventDefault()
      const { roomOne, roomTwo, roomThree, roomFour, roomTwoEnabled, roomThreeEnabled, roomFourEnabled } = this.state
      // Now we need to persist room data to localStorage
      window.localStorage.setItem('roomOne', JSON.stringify([roomOne.adults, roomOne.children]))

      roomTwoEnabled
        ? window.localStorage.setItem('roomTwo', JSON.stringify([roomTwo.adults, roomTwo.children]))
        : window.localStorage.removeItem('roomTwo', JSON.stringify([roomTwo.adults, roomTwo.children]))

      roomThreeEnabled
        ? window.localStorage.setItem('roomThree', JSON.stringify([roomThree.adults, roomThree.children]))
        : window.localStorage.removeItem('roomThree', JSON.stringify([roomThree.adults, roomThree.children]))

      roomFourEnabled
        ? window.localStorage.setItem('roomFour', JSON.stringify([roomFour.adults, roomFour.children]))
        : window.localStorage.removeItem('roomFour', JSON.stringify([roomFour.adults, roomFour.children]))
    }

    filterOptions = (room, type, options) => {
      return options.filter(option => option !== Number(room[type]))
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
      const {
        roomOne,
        roomTwo,
        roomThree,
        roomFour,
        options,
        roomTwoEnabled,
        roomThreeEnabled,
        roomFourEnabled
      } = this.state
      const { filterOptions, toggleRoom } = this

      // TODO: With more time, refactor the filter options to something even further reusable and less cluttered in the render.
      let filteredAdultOptions
      let filteredChildrenOptions
      let filteredAdultOptionsR2
      let filteredChildrenOptionsR2
      let filteredAdultOptionsR3
      let filteredChildrenOptionsR3
      let filteredAdultOptionsR4
      let filteredChildrenOptionsR4

      if (roomOne) {
        filteredAdultOptions = filterOptions(roomOne, 'adults', options)
        filteredChildrenOptions = filterOptions(roomOne, 'children', options)
      }

      if (roomTwo) {
        filteredAdultOptionsR2 = filterOptions(roomTwo, 'adults', options)
        filteredChildrenOptionsR2 = filterOptions(roomTwo, 'children', options)
      }

      if (roomThree) {
        filteredAdultOptionsR3 = filterOptions(roomThree, 'adults', options)
        filteredChildrenOptionsR3 = filterOptions(roomThree, 'children', options)
      }

      if (roomFour) {
        filteredAdultOptionsR4 = filterOptions(roomFour, 'adults', options)
        filteredChildrenOptionsR4 = filterOptions(roomFour, 'children', options)
      }

      return (
        <DynamicForm.Styled className='dynamic-form-view-component'>
          <header className='dynamicform-header'>
            <h1>Test II: A Dynamic Form</h1>
          </header>

          <Card className='form-wrapper'>
            <form className='form' onSubmit={this.handleSubmit}>
              {roomOne && <Card className='form-rooms'>
                <h1>Room 1</h1>
                <label>Adults (18+)</label>
                <select onChange={(e) => this.onNewSelect(e, 'adults', 'roomOne')}>
                  <option defaultValue={roomOne.adults}>{roomOne.adults}</option>
                  {filteredAdultOptions && (
                    filteredAdultOptions.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>

                <label>Children (0-17)</label>
                <select onChange={(e) => this.onNewSelect(e, 'children', 'roomOne')}>
                  <option defaultValue={roomOne.children}>{roomOne.children}</option>
                  {filteredChildrenOptions && (
                    filteredChildrenOptions.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>
              </Card>}

              {roomTwo && <Card className='form-rooms'>
                <h1>Room 2</h1>
                <label>Adults (18+)</label>
                <input
                  type='checkbox'
                  id='room-2'
                  name='room two'
                  checked={roomTwoEnabled}
                  onClick={e => toggleRoom(e, 'roomTwoEnabled')}
                />
                <select
                  disabled={!roomTwoEnabled}
                  onChange={(e) => this.onNewSelect(e, 'adults', 'roomTwo')}
                >
                  <option defaultValue={roomTwo.adults}>{roomTwo.adults}</option>
                  {filteredAdultOptionsR2 && (
                    filteredAdultOptionsR2.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>

                <label>Children (0-17)</label>
                <select
                  disabled={!roomTwoEnabled}
                  onChange={(e) => this.onNewSelect(e, 'children', 'roomTwo')}
                >
                  <option defaultValue={roomTwo.children}>{roomTwo.children}</option>
                  {filteredChildrenOptionsR2 && (
                    filteredChildrenOptionsR2.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>
              </Card>}

              {roomThree && <Card className='form-rooms'>
                <h1>Room 3</h1>
                <label>Adults (18+)</label>
                <input
                  type='checkbox'
                  id='room-3'
                  name='room three'
                  checked={roomThreeEnabled}
                  onClick={e => toggleRoom(e, 'roomThreeEnabled', 'roomTwoEnabled')}
                />
                <select
                  disabled={!roomThreeEnabled}
                  onChange={(e) => this.onNewSelect(e, 'adults', 'roomThree')}
                >
                  <option defaultValue={roomThree.adults}>{roomThree.adults}</option>
                  {filteredAdultOptionsR3 && (
                    filteredAdultOptionsR3.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>

                <label>Children (0-17)</label>
                <select
                  disabled={!roomThreeEnabled}
                  onChange={(e) => this.onNewSelect(e, 'children', 'roomThree')}
                >
                  <option defaultValue={roomThree.children}>{roomThree.children}</option>
                  {filteredChildrenOptionsR3 && (
                    filteredChildrenOptionsR3.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>
              </Card>}

              {roomFour && <Card className='form-rooms'>
                <h1>Room 4</h1>
                <label>Adults (18+)</label>
                <input
                  type='checkbox'
                  id='room-4'
                  name='room four'
                  checked={roomFourEnabled}
                  onClick={e => toggleRoom(e, 'roomFourEnabled', 'roomThreeEnabled', 'roomTwoEnabled')}
                />
                <select
                  disabled={!roomFourEnabled}
                  onChange={(e) => this.onNewSelect(e, 'adults', 'roomFour')}
                >
                  <option defaultValue={roomFour.adults}>{roomFour.adults}</option>
                  {filteredAdultOptionsR4 && (
                    filteredAdultOptionsR4.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>

                <label>Children (0-17)</label>
                <select
                  disabled={!roomFourEnabled}
                  onChange={(e) => this.onNewSelect(e, 'children', 'roomFour')}
                >
                  <option defaultValue={roomFour.children}>{roomFour.children}</option>
                  {filteredChildrenOptionsR4 && (
                    filteredChildrenOptionsR4.map(option => {
                      return (
                        <option key={option}>{option}</option>
                      )
                    })
                  )}
                </select>
              </Card>}
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
