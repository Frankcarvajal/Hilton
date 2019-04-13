import React, { PureComponent } from 'react'
import styled from 'styled-components'
import {
  Avatar,
  Badge,
  Button,
  Card,
  Label,
  List,
  ProgressScale,
  HotelList
} from '../../components'

import me from './Profile.png'

export default class Components extends PureComponent {
  render () {
    return (
      <ComponentsStyled className='components-view-component'>
        <h2>Rating Scale</h2>
        <UiWrapper>
          <ProgressScale max={3} value={1} color={'#2bbf6a'} readOnly onClick={(score) => {
            console.log('score', score)
          }} />
        </UiWrapper>

        <UiWrapper>
          <ProgressScale gutterWidth={0} max={10} value={2} onClick={(score) => {
            console.log('score', score)
          }} />
        </UiWrapper>

        <h2>Buttons</h2>
        <UiWrapper>
          <Button color='primary' onClick={() => { console.log('here') }}>Primary</Button>
          <Button color='primary' disabled onClick={() => { console.log('here') }}>Primary Disabled</Button>
          <Button onClick={() => { console.log('here') }}>Default</Button>
          <Button disabled onClick={() => { console.log('here') }}>Default Disabled</Button>
        </UiWrapper>

        <h2>Avatar</h2>
        <UiWrapper>
          <Avatar name='Franklin Carvajal' />
          <Avatar name='Franklin Carvajal' src={me} />
        </UiWrapper>

        <h2>Badge</h2>
        <UiWrapper>
          <Badge>2</Badge>
          <Badge color='default'>2</Badge>
        </UiWrapper>

        <h2>Label</h2>
        <UiWrapper>
          <Label>New</Label>
          <Label color='default'>Skipped</Label>
        </UiWrapper>

        <h2>HotelList Items</h2>
        <Card>
          <HotelList>
            <li className='active'>
              <Avatar name='Franklin Carvajal' />
            </li>
            <li>
              <Avatar name='Franklin Carvajal' />
            </li>
            <li>
              <Avatar name='Franklin Carvajal' />
            </li>
            <li>
              <Avatar name='Franklin Carvajal' />
            </li>
            <li>
              <Avatar name='Franklin Carvajal' />
            </li>
          </HotelList>
        </Card>

        <h2>HotelList Questions</h2>
        <Card>
          <List>
            <li>Hilton Perfect Hotel's Feedback</li>
            <li>How well did this hotel do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</li>
            <li>How would you rate the quality of X Lorem ipsum dolor sit amet?</li>
            <li>How did this hotel's manager handle X?</li>
            <li>How did this hotel's staff handle X?</li>
          </List>
        </Card>
      </ComponentsStyled>
    )
  }
}

const ComponentsStyled = styled.div`
  padding: 100px;
`

const UiWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 50px;
`
