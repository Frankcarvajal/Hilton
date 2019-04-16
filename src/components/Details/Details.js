import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import Address from '../Address'
import Button from '../Button'
import backgroundImg from './test1_assets/background.png'

const Details = ({ address, number, children, className, details, img, userName }) => {
  return (
    <Details.Styled backgroundImg={backgroundImg} className={classnames('details-component', { [className]: className })}>
      {img && <img src={img} className='details-img' />}
      {userName && <h1 className='details-by'>{userName} Details</h1>}
      {address && <div className='details-address'>
        <Address
          street={address.street}
          unitNumber={address.unitNumber}
          city={address.city}
          state={address.state}
          zipcode={address.zipcode}
          twoLines
        />
        {number && <a className='details-number'>{number}</a>}
      </div>}
      {userName && <div className='details-tabs'>
        <Button color='#e2e7eb' className='btns'>Map</Button>
        <Button color='#e2e7eb' className='btns'>Photo Gallery</Button>
        <Button color='#e2e7eb' className='btns'>Amenities</Button>
      </div>}
    </Details.Styled>
  )
}

Details.propTypes = {
  address: PropTypes.shape({
    city: PropTypes.string,
    state: PropTypes.string,
    street: PropTypes.string,
    unitNumber: PropTypes.string,
    zipcode: PropTypes.string
  }),
  number: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  details: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.any,
    id: PropTypes.string,
    question: PropTypes.string,
    type: PropTypes.string
  })),
  img: PropTypes.string,
  userName: PropTypes.string
}

Details.Styled = styled.div`
  &.details-component {
    background: url(${props => props.backgroundImg}) no-repeat;
    background-size: 100%;
    padding-bottom: 150px;
    border-left: 1px solid #D9DCDE;
    color: #FFF;
    padding: 25px;
    width: 100%;
  }

  .details-by {
    color: #FFF;
    text-align: left;
    margin: 0 auto;
    padding-top: 25px;
  }

  .details-address {
    color: #90acc7;
    text-align: left;
    width: 100%;
  }

  .details-number {
    display: block;
    color: #FFF;
    padding-bottom: 25px;
  }

  .details-img {
    border: 5px solid #FFF;
    width: 100%;
    max-height: 500px;
    min-height: 500px;
  }

  .details-tabs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .btns {
    width: 100%;
  }
`

export default Details
