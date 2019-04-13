import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { navigate } from '@reach/router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Button } from '../../components'
import { login } from '../../store/session'

class Login extends Component {
  handleLogin = async () => {
    this.props.login({
      name: 'Jane Smith'
    })
    navigate('/share-feedback')
  }

  render () {
    return (
      <Login.Styled className='login-view-component'>
        <div>
          <img className='logo' src={require('./Hilton-logo.png')} />
          <h1>Details and feedback</h1>
          <Button onClick={this.handleLogin} color='primary'>Login</Button>
        </div>
      </Login.Styled>
    )
  }
}

Login.propTypes = {
  login: PropTypes.func
}

Login.Styled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;

  > div {
    align-items: center;
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 382px;
    justify-content: center;
    width: 380px;

    .logo {
      height: 70px;
      margin-bottom: 20px;
    }
  }
`

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => (bindActionCreators({
  login
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Login)
