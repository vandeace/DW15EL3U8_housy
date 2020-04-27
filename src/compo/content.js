import React, { Component } from 'react';
import '../style/content.css';
import { Container, Row, Col } from 'react-bootstrap';

export default class Content extends Component {
  render() {
    return (
      <div className='content-item'>
        <Container fluid className='content-tag-pos'>
          <Row>
            <Col xs={3}>
              {(this.props.item.amenities[0] === 'furnished' ||
                this.props.item.amenities[1] === 'furnished' ||
                this.props.item.amenities[2] === 'furnished') && (
                <div className='content-tag-rect-1'>Furnished</div>
              )}
            </Col>
            <Col xs={3}>
              {(this.props.item.amenities[0] === 'pet allowed' ||
                this.props.item.amenities[1] === 'pet allowed' ||
                this.props.item.amenities[2] === 'pet allowed') && (
                <div className='content-tag-rect-2'>Pet Allowed</div>
              )}
            </Col>
            <Col xs={6}>
              {(this.props.item.amenities[0] === 'shared acomodation' ||
                this.props.item.amenities[1] === 'shared acomodation' ||
                this.props.item.amenities[2] === 'shared acomodation') && (
                <div className='content-tag-rect-3'>Shared Acomodation</div>
              )}
            </Col>
          </Row>
        </Container>
        <img
          src={
            process.env.PUBLIC_URL + `../pictures/${this.props.item.id + 1}.png`
          }
          alt=''
          className='content-image'
        ></img>
        <p className='content-info-1'>
          Rp. {this.props.item.price} / {this.props.item.typeRent}
        </p>
        <p className='content-info-2'>
          {this.props.item.bedroom} Bed, {this.props.item.bathroom} Baths
        </p>
        <p className='content-info-3'>{this.props.item.city}</p>
      </div>
    );
  }
}
