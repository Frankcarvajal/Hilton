import React from 'react'
import styled from 'styled-components'
import { Button, Card } from '../../components'

const NotFound = () => (
  <NotFound.Styled className='not-found-component'>
    <Card>
      <h2>404</h2>
      <h3>Sorry! The page you are looking for<br />cannot be found.</h3>
      <Button color='primary'>Back to Share Feedback</Button>
    </Card>
  </NotFound.Styled>
)

NotFound.Styled = styled.div`
  &.not-found-component {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 14px;
      letter-spacing: 2px;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 24px;
      font-weight: normal;
      margin-bottom: 20px;
      line-height: 1.4;
    }

    .card-component {
      padding: 50px 30px;
      width: 780px;
      height: 275px;
    }
  }
`

export default NotFound
