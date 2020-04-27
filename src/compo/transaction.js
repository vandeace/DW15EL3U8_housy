import React, { Component } from 'react';
import Data from '../data/transaction.json';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Search from '../pic/search.png';
import Logo from '../pic/Icon.png';
import Payment from '../pic/payment.jpg';
import * as actOrder from '../_action/order';
import '../style/transaction_item.css';

export default class Transaction extends Component {
  state = {
    modal: false,
  };
  showModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <Container fluid className='transaction-item-area'>
          <Row>
            <Col xs={2} className='transaction-item-text'>
              {this.props.item.id}
            </Col>
            <Col xs={2} className='transaction-item-text'>
              <div style={{ textTransform: 'capitalize' }}>
                {this.props.item.User.fullName}
              </div>
            </Col>
            <Col xs={2} className='transaction-item-text'>
              <div style={{ textTransform: 'capitalize' }}>
                {this.props.item.House.typeRent}
              </div>
            </Col>
            <Col xs={2} className='transaction-item-text'>
              {this.props.item.payment}
            </Col>
            {this.props.item.status === 'waiting payment' && (
              <Col xs={2} className='transaction-item-text color-red'>
                {this.props.item.status}
              </Col>
            )}
            {this.props.item.status === 'pending' && (
              <Col xs={2} className='transaction-item-text color-orange'>
                {this.props.item.status}
              </Col>
            )}
            {this.props.item.status === 'approve' && (
              <Col xs={2} className='transaction-item-text color-green'>
                {this.props.item.status}
              </Col>
            )}
            {this.props.item.status === 'cancel' && (
              <Col xs={2} className='transaction-item-text color-red'>
                {this.props.item.status}
              </Col>
            )}
            <Col xs={2} className='transaction-item-text'>
              <img src={Search} alt='' onClick={this.showModal}></img>
            </Col>
          </Row>
          <p className='transaction-item-line' />
        </Container>

        <Modal
          size='xl'
          show={this.state.modal}
          onHide={this.closeModal}
          aria-labelledby='example-modal-sizes-title-xl'
        >
          <Modal.Header closeButton>
            <Modal.Title id='example-modal-sizes-title-lg'>
              <h3>Payment Detail</h3>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={{}}>
              <Col xs={3}>
                <img src={Logo} alt=''></img>
              </Col>
              <Col xs={6}></Col>
              <Col xs={3}>
                <h3>Booking</h3>
                <br />
                <p>Saturday, 30 March 2020</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3} style={{ height: '250px' }}>
                <h4 style={{ textTransform: 'capitalize' }}>
                  {this.props.item.House.name}
                </h4>
                <p tyle={{ textTransform: 'capitalize' }}>
                  {this.props.item.House.address},{this.props.item.House.city}
                </p>
              </Col>
              <Col xs={1}></Col>
              <Col xs={2} style={{ height: '200px' }}>
                <h4>Check-In</h4>
                <p>{this.props.item.checkIn}</p>
                <h4 style={{ marginTop: '30px' }}>Check-Out</h4>
                <p>{this.props.item.checkOut}</p>
              </Col>
              <Col xs={2} style={{ marginLeft: '20px' }}>
                <h4>Amenities</h4>
                <p>
                  {this.props.item.House.amenities[0] && (
                    <p style={{ textTransform: 'capitalize' }}>
                      {this.props.item.House.amenities[0]}
                    </p>
                  )}
                  {this.props.item.House.amenities[1] && (
                    <p style={{ textTransform: 'capitalize' }}>
                      {this.props.item.House.amenities[1]}
                    </p>
                  )}
                  {this.props.item.House.amenities[2] && (
                    <p style={{ textTransform: 'capitalize' }}>
                      {this.props.item.House.amenities[2]}
                    </p>
                  )}
                </p>
                <h4 style={{ marginTop: '30px' }}>Type of Rent</h4>
                <p style={{ textTransform: 'capitalize' }}>
                  {this.props.item.House.typeRent}
                </p>
              </Col>
              <Col style={{ marginLeft: '40px' }}>
                <img
                  src={Payment}
                  alt=''
                  style={{ width: '200px', height: '200px' }}
                ></img>
              </Col>
            </Row>
            <Row style={{ border: '1px solid black' }}>
              <Col xs={1}>
                <h4>No</h4>
              </Col>
              <Col xs={3}>
                <h4>FullName</h4>
              </Col>
              <Col xs={2}>
                <h4>Gender</h4>
              </Col>
              <Col xs={3}>
                <h4>Phone</h4>
              </Col>
            </Row>
            <Row
              style={{
                border: '1px solid black',
                borderTop: 'none',
                paddingTop: '10px',
              }}
            >
              <Col xs={1}>
                <p>1</p>
              </Col>
              <Col xs={3}>
                <p style={{ textTransform: 'capitalize' }}>
                  {this.props.item.User.fullName}
                </p>
              </Col>
              <Col xs={2}>
                <p style={{ textTransform: 'capitalize' }}>
                  {this.props.item.User.gender}
                </p>
              </Col>
              <Col xs={2}>
                <p>08123456789</p>
              </Col>
              <Col xs={2} style={{ padding: '0 0' }}>
                <h5>Long time rent </h5>
              </Col>
              <Col xs={2}>
                <h5 style={{ textTransform: 'capitalize' }}>
                  : 1 {this.props.item.House.typeRent}
                </h5>
              </Col>
            </Row>
            <Row
              style={{
                border: '1px solid',
                paddingTop: '3px',
                borderTop: 'none',
              }}
            >
              <Col xs={8}></Col>
              <Col xs={2}>
                <h5>Total</h5>
              </Col>
              <Col xs={2}>
                <h5>
                  :<span style={{ color: 'red' }}>{this.props.item.total}</span>
                </h5>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col xs={4}>
                <Button variant='danger' onClick={this.closeModal}>
                  CANCEL
                </Button>
              </Col>
              <Col xs={8}>
                <Button variant='success' onClick={this.closeModal}>
                  APPROVE
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
