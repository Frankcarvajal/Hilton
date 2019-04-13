import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'

export default class ProgressScale extends Component {
  state = {
    hoverIndex: -1,
    value: this.props.value
  }

  handleMouseOver = (fi) => () => {
    const { readOnly } = this.props

    if (!readOnly) {
      this.setState({
        hoverIndex: fi
      })
    }
  }

  handleMouseOut = () => {
    const { readOnly } = this.props

    if (!readOnly) {
      this.setState({
        hoverIndex: -1
      })
    }
  }

  handleClick = (fi) => () => {
    const { readOnly, onClick } = this.props

    if (!readOnly) {
      this.setState((currentState) => ({
        value: currentState.value === fi ? 0 : fi
      }), () => {
        if (onClick instanceof Function) {
          onClick(this.state.value)
        }
      })
    }
  }

  render () {
    const { className, color, gutterWidth, max, readOnly } = this.props
    const { hoverIndex, value } = this.state

    return (
      <ProgressScale.Styled
        className={classnames('progress-scale-component', { [className]: className })}
        color={color}
        gutterWidth={gutterWidth}
        readOnly={readOnly}
      >
        {new Array(max).fill('').map((meh, i) => {
          const friendlyI = i + 1

          return (
            <div
              className={classnames('frame', {
                hover: hoverIndex >= 0 && friendlyI <= hoverIndex,
                fill: friendlyI <= value
              })}
              key={i}
              onClick={this.handleClick(friendlyI)}
              onMouseOut={this.handleMouseOut}
              onMouseOver={this.handleMouseOver(friendlyI)}
              title={friendlyI}
            >
              <div className='window' />
            </div>
          )
        })}
      </ProgressScale.Styled>
    )
  }
}

ProgressScale.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  readOnly: PropTypes.bool,
  gutterWidth: PropTypes.number,
  max: PropTypes.number,
  onClick: PropTypes.func,
  value: PropTypes.number
}

ProgressScale.defaultProps = {
  gutterWidth: 4,
  max: 10,
  readOnly: false,
  value: 0
}

ProgressScale.Styled = styled.div`
  &.progress-scale-component {
    background: ${({ theme, color }) => color || `linear-gradient(to right, ${theme.colors.status.error} 0%, ${theme.colors.status.warning} 50%, ${theme.colors.status.success} 100%)`};
    display: flex;
    flex-direction: row;
    flex-flow: row nowrap;
    margin-left: border: ${({ gutterWidth }) => `-${gutterWidth}px`};
    margin-left: right: ${({ gutterWidth }) => `-${gutterWidth}px`};
    height: 50px;
    width: 100%;

    .frame {
      border: ${({ gutterWidth }) => `${gutterWidth}px`} solid white;
      cursor: ${({ readOnly }) => readOnly ? 'cursor' : 'pointer'};
      height: 100%;
      width: 100%;

      .window {
        background-color: #F2F3F4;
        height: 100%;
        opacity: 1;
        transition: opacity 0.3s ease;
        width: 100%;
      }

      &.hover .window {
        opacity: 0.5;
      }

      &.fill .window {
        opacity: 0;
      }
    }
  }
`
