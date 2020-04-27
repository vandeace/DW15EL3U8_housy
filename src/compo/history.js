import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Logo from '../pic/Icon.png';
import Payment from 'qrcode.react';
import { connect } from 'react-redux';
import * as actOrder from '../_action/order';

class History extends Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials'));
    // const token = this.props.users.token;
    // console.log(this.state.token);
    this.props.dispatch(actOrder.getOrders(data.token));
  }

  render() {
    const order = this.props.order;
    console.log(order);
    return (
      <>
        <Container fluid style={{ width: '60%', height: '200px' }}>
          {order.data.map((data, i) => (
            <Container
              fluid
              style={{
                backgroundColor: 'white',
                marginTop: '30px',
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
                  <h3>{data.House.name}</h3>
                  <p>{data.House.address}</p>
                  <Alert variant='success' style={{ marginRight: '10px' }}>
                    {data.status}
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
                  <p>{data.checkIn}</p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <h4 style={{ marginTop: '30px' }}>Check-Out</h4>
                  <p> {data.checkOut} </p>
                </Col>
                <Col xs={2} style={{ marginLeft: '20px' }}>
                  <h4>Amenities</h4>
                  <p>{data.House.amenities}</p>
                  <h4 style={{ marginTop: '30px' }}>Type of Rent</h4>
                  <p>{data.House.typeRent}</p>
                </Col>
                <Col style={{ marginLeft: '40px' }}>
                  <Payment value='TCK0101' />
                  <h5>TCK0101</h5>
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
                  <p>{data.User.fullName}</p>
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
                    : <span style={{ color: 'green' }}> {data.total} </span>
                  </h5>
                </Col>
              </Row>
            </Container>
          ))}
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
    users: state.user,
  };
};

export default connect(mapStateToProps)(History);
