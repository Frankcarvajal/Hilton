import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

export default class Button extends Component {
  handleClick = () => {
    const { onClick, disabled } = this.props

    if (!disabled && onClick instanceof Function) {
      onClick()
    }
  }

  render () {
    const { color, children, disabled, className } = this.props

    return (
      <Button.Styled
        className={classnames('button-component', { [className]: className })}
        color={color}
        disabled={disabled}
        onClick={this.handleClick}
      >
        {children}
      </Button.Styled>
    )
  }
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'default']),
  onClick: PropTypes.func
}

Button.defaultProps = {
  color: 'default',
  onClick: () => false
}

Button.Styled = styled.button`
  background-color: ${({ color, theme, disabled }) => {
    if (disabled) {
      return theme.colors.buttons.disabled
    }

    return color === 'primary'
      ? theme.colors.buttons.primary
      : theme.colors.buttons.default
  }};
  border-color: ${({ theme }) => (theme.colors.borderColor)};
  border-width: 1px;
  border-radius: 4px;
  color: ${({ color, theme, disabled }) => {
    if (disabled) {
      return theme.colors.lightest
    }

    return color === 'primary'
      ? theme.colors.lightest
      : theme.colors.text.normal
  }};
  cursor: ${({ disabled }) => {
    return disabled
      ? 'default'
      : 'pointer'
  }};
  font-size: 16px;
  height: 48px;
  line-height: 48px;
  min-width: 150px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  transition: background-color 0.3s ease;
  user-select: none;

  &:hover {
    background-color: ${({ color, theme, disabled }) => {
    if (disabled) {
      return theme.colors.buttons.disabled
    }

    return color === 'primary'
      ? theme.colors.buttons.primaryHover
      : theme.colors.buttons.defaultHover
  }};
  }
`
