import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

import { List } from '..'

const HotelList = ({ children, className }) => (
  <HotelList.Styled className={classnames('user-list-component', { [className]: className })}>
    {children}
  </HotelList.Styled>
)

HotelList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

HotelList.Styled = styled(List)`
  &.user-list-component {
    > li {
      transition: background-color 0.25s ease;

      &.active {
        background-color: #F2F3F4;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.background.hoverLight};
      }
    }
  }
`

export default HotelList
