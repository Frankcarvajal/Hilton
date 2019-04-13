import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import Address from '../Address'
import Button from '../Button'

const Details = ({ address, number, children, className, details, img, userName }) => {
  return (
    <Details.Styled className={classnames('details-component', { [className]: className })}>
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
        {number && <h2>{number}</h2>}
      </div>}
      {img && <img src={img} className='details-img' />}
      {userName && <div className='details-tabs'>
        <Button color='primary'>Map</Button>
        <Button color='primary'>Photo Gallery</Button>
        <Button color='primary'>Amenities</Button>
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
    padding-bottom: 150px;
    border-left: 1px solid #D9DCDE;
    width: 100%;
  }

  .details-by {
    text-align: center;
  }

  .details-address {
    text-align: center;
    width: 100%;
  }

  .details-img {
    width: 100%;
    max-height: 500px;
    min-height: 500px;
  }

  .details-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default Details
