import React, { Component } from 'react';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import Logo from '../pic/Icon.png';
import Payment from '../pic/payment.jpg';

export default class Bookingdata extends Component {
  render() {
    return (
      <>
        <Container fluid style={{ width: '60%', height: '200px' }}>
          <Container
            fluid
            style={{
              backgroundColor: '#e7f2e6',
            }}
          >
            <Row
              style={{
                border: '1px solid black',
                borderBottom: '1px solid white',
              }}
            >
              <Col xs={2}>
                <img src={Logo} alt=''></img>
              </Col>
              <Col xs={7}></Col>
              <Col xs={3}>
                <h1 style={{ marginBottom: '-20px' }}>Booking</h1>
                <br />
                <p>Saturday, 30 March 2020</p>
              </Col>
            </Row>
            <Row
              style={{
                border: '1px solid',
                borderTop: 'none',
                borderBottom: 'none',
              }}
            >
              <Col xs={3} style={{ height: '250px' }}>
                <h3>House Astina</h3>
                <p>JL.Tuanku Tambusai no500e ,Pekanbaru ,Riau</p>
                <Alert variant='danger' style={{ marginRight: '10px' }}>
                  Waiting Payment
                </Alert>
              </Col>
              <Col xs={1}>
                <div
                  style={{
                    marginTop: '60px',
                    width: '100px',
                    height: '0px',
                    border: '2px solid blue',
                    transform: 'rotate(90deg)',
                  }}
                ></div>
              </Col>
              <Col xs={2} style={{ height: '200px' }}>
                <h4>Check-In</h4>
                <p>30 March 2020</p>
                <p></p>
                <p></p>
                <p></p>
                <h4 style={{ marginTop: '30px' }}>Check-Out</h4>
                <p>31 March 2021</p>
              </Col>
              <Col xs={2} style={{ marginLeft: '20px' }}>
                <h4>Amenities</h4>
                <p>Furnished</p>
                <h4 style={{ marginTop: '30px' }}>Type of Rent</h4>
                <p>Year</p>
              </Col>
              <Col style={{ marginLeft: '40px' }}>
                <img
                  src={Payment}
                  alt=''
                  style={{ width: '200px', height: '200px' }}
                ></img>
                <p>Upload Payment Proof</p>
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
                <p>Jafar Ganteng</p>
              </Col>
              <Col xs={2}>
                <p>Male</p>
              </Col>
              <Col xs={2}>
                <p>08123456789</p>
              </Col>
              <Col xs={2} style={{ padding: '0 0' }}>
                <h5>Long time rent </h5>
              </Col>
              <Col xs={2}>
                <h5>: 1 Year</h5>
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
                  : <span style={{ color: 'red' }}>Rp 3.000.000</span>
                </h5>
              </Col>
            </Row>
          </Container>
          <Row>
            <Col xs={10}></Col>
            <Col xs={2}>
              <Button
                variant='success'
                style={{
                  marginTop: '20px',
                }}
              >
                Pay Now
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
