
import React, { PureComponent, Component } from 'react'
import { Router } from '@reach/router'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import get from 'lodash/get'

import store from '../../store'
import theme from '../../theme'
import { AppFooter } from '../../components'
import {
  Components,
  DynamicForm,
  Login,
  HotelReviews,
  HotelDetails,
  NotFound,
  ShareFeedback,
  Survey,
  ManagerFeedback,
  Staff,
  ViewSurvey
} from '../../views'
import Home from './Home'

injectGlobal`
  * {
    box-sizing: border-box;
    font-family: arial;
  }

  html, body, #root {
    height: 100%;
  }

  html {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

console.log(store.getState())

export default class AppRoot extends PureComponent {
  render () {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedApp />
        </ThemeProvider>
      </Provider>
    )
  }
}

class App extends Component {
  render () {
    const hideBackground = get(this.props, 'session.user')

    return (
      <App.Styled className='app-view' hideBackground={hideBackground}>
        <div className='page-wrap'>
          <Router primary className='primary-router'>
            <Login path='/login' />
            <Home path='/'>
              <Components path='components' />
              <DynamicForm path='dynamic-form' />
              <HotelReviews path='hotel-reviews' />
              <HotelDetails path='hotel-details' />
              <ShareFeedback path='share-feedback' />
              <Survey path='survey/:requestId' />
              <ManagerFeedback path='manager-feedback' />
              <Staff path='staff' />
              <ViewSurvey path='view-survey/:requestId' />
            </Home>
            <NotFound default />
          </Router>
        </div>
        <AppFooter />
      </App.Styled>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session
})
const mapDispatchToProps = dispatch => (bindActionCreators({}, dispatch))
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

App.Styled = styled.div`
  height: 100%;
  background: ${({ hideBackground }) => {
    return hideBackground
      ? 'none'
      : `url(${require('./background.png')}) no-repeat center center fixed`
  }};
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  h1, h2, h3, h4, p, ul, ol, li {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => (theme.colors.text.normal)};
  }

  h1 {
    font-size: 30px;
    font-weight: normal;
    margin-bottom: 24px;
  }

  ol, ul {
    list-style-type: none;
  }

  a {
    color: ${({ theme }) => theme.colors.text.dark}
    cursor: pointer;
    text-decoration: none;
  }

  .page-wrap {
    min-height: 100%;
    margin-bottom: -54px;
    padding-bottom: 100px;

    &:after {
      height: 54px
      content: "";
      display: block;
    }
  }

  .primary-router {
    > div {
      margin-left: auto;
      margin-right: auto;
    }
  }
`
