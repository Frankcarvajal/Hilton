import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

const Badge = ({ children, color, className }) => (
  <Badge.Styled color={color} className={classnames('badge-component', { [className]: className })}>
    {children}
  </Badge.Styled>
)

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'default'])
}

Badge.defaultProps = {
  color: 'primary'
}

Badge.Styled = styled.span`
  align-items: center;
  background-color: ${({ color, theme }) => {
    return color === 'primary'
      ? theme.colors.buttons.primary
      : theme.colors.background.medium
  }};
  border: ${({ color, theme }) => {
    return color === 'primary'
      ? `1px solid ${theme.colors.borderColor}`
      : `1px solid ${theme.colors.background.medium}`
  }};
  border-radius: 50%;
  color: ${({ theme }) => theme.colors.lightest};
  display: flex;
  font-size: 11px;
  font-weight: bold;
  height: 16px;
  justify-content: center;
  overflow: hidden;
  width: 16px;
`

export default Badge
