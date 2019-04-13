import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

const Avatar = ({ src, name, className }) => (
  <Avatar.Styled className={classnames('avatar-component', { [className]: className })}>
    {src
      ? <img title={name} alt={name} src={src} />
      : <span title={name}>{getInitials(name)}</span>
    }
  </Avatar.Styled>
)

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string
}

Avatar.Styled = styled.div`
  align-items: center;
  background-color: ${({ theme }) => (theme.colors.background.lightest)};
  border-radius: 50%;
  border: ${({ theme }) => ('2px solid ' + theme.colors.borderColor)};
  color: ${({ theme }) => (theme.colors.text.light)};
  cursor: default;
  display: flex;
  font-size: 28px;
  height: 58px;
  justify-content: center;
  overflow: hidden;
  width: 58px;

  > img {
    width: 100%;
    height: 100%
  }
`

function getInitials (firstAndLast) {
  return firstAndLast && firstAndLast
    .split(' ')
    .map((name) => name[0])
    .join('')
}

export default Avatar
