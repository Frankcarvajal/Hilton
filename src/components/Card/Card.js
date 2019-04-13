import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

const Card = ({ children, className }) => (
  <Card.Styled className={classnames('card-component', { [className]: className })}>
    {children}
  </Card.Styled>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Card.Styled = styled.div`
  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.2);
`

export default Card
