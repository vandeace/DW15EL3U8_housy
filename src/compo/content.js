import React, { Component } from 'react';
import '../style/content.css';

export default class Content extends Component {
  render() {
    const {
      picture,
      address,
      price,
      typeRent,
      bedroom,
      bathroom,
      city,
      amenities,
    } = this.props.data;
    return (
      <div>
        <div className='content-item'>
          <div className='content-tag-rect'>{amenities}</div>
          <img src={picture} alt='' className='content-image'></img>
          <p className='content-info-1'>
            Rp.{price} / {typeRent}
          </p>
          <p className='content-info-2'>
            {bedroom} Beds, {bathroom} Baths
          </p>
          <p className='content-info-3'>
            {city},{address}
          </p>
        </div>
      </div>
    );
  }
}
