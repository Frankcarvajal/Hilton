import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

const List = ({ children, className }) => (
  <List.Styled className={classnames('list-component', { [className]: className })}>
    {children}
  </List.Styled>
)

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

List.Styled = styled.ul`
  &.list-component {
    width: 100%;

    li {
      align-items: center;
      background-color: ${({ theme }) => theme.colors.lightest};
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
      display: flex;
      height: 90px;
      padding-left: 20px;
      padding-right: 20px;

      &:last-child {
        border-bottom: none;
      }
    }
  }
`

export default List
