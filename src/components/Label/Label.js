import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

const Label = ({ children, color, className }) => (
  <Label.Styled color={color} className={classnames('label-component', { [className]: className })}>
    {children}
  </Label.Styled>
)

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'default'])
}

Label.defaultProps = {
  color: 'primary'
}

Label.Styled = styled.span`
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
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.lightest};
  font-size: 12px;
  font-weight: bold;
  height: 20px;
  letter-spacing: 2px;
  line-height: 20px;
  padding-left: 8px;
  padding-right:8px;
  text-align: center;
  text-transform: uppercase;
`

export default Label
