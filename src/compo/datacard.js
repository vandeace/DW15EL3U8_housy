import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Cardroom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      picture,
      address,
      price,
      typeRent,
      bedroom,
      bathroom,
      city,
    } = this.props.data;

    return (
      <div
        style={{
          width: '350px',
          height: '280px',

          margin: '10px 0',
          border: '3px solid rgba(196, 196, 196, 0.25)',
          paddingLeft: '0px',
        }}
      >
        <div style={{ paddingTop: '10px', paddingLeft: '10px' }}>
          <img src={picture} style={{ width: '300px', height: '180px' }}></img>
          <div>
            Rp.
            {price} / {typeRent}
          </div>
          <div
            style={{
              width: '200px',
              height: '20px',
            }}
          >
            {bedroom} Bed, {bathroom} Baths
          </div>
          <div
            style={{
              width: ' 200px',
              height: '100px',
              marginTop: '10px',
              fontWeight: '500',
              fontSize: '12px',
              fontStyle: 'normal',
              lineHeight: '20px',
            }}
          >
            {city},{address}
          </div>
        </div>
      </div>
    );
  }
}
