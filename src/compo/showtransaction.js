import React, { Component } from 'react';
import Data from '../data/transaction.json';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Search from '../pic/search.png';
import Logo from '../pic/Icon.png';
import Payment from '../pic/payment.jpg';

export default class Showtransaction extends Component {
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
        <Container
          fluid
          style={{
            border: '1px solid blue',
            backgroundColor: '#b3e8e5',
            borderRadius: '10px',
            paddingLeft: '200px',
          }}
        >
          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              <h2>DATA TRANSACTION</h2>
            </Col>
            <Col xs={4}></Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={1}>
              <h4>No</h4>
            </Col>
            <Col xs={2}>
              <h4>Users</h4>
            </Col>
            <Col xs={2}>
              <h4>Type Of Rent</h4>
            </Col>
            <Col xs={2}>
              <h4>Payment Proof</h4>
            </Col>
            <Col xs={2}>
              <h4>Payment Status</h4>
            </Col>
            <Col xs={1}>
              <h4>Action</h4>
            </Col>
          </Row>
          {Data.transaction.map((data, i) => (
            <Row style={{ marginTop: '20px' }}>
              <Col xs={1}>
                <h5>{data.no}</h5>
              </Col>
              <Col xs={2}>
                <h5>{data.nama}</h5>
              </Col>
              <Col xs={2}>
                <h5>{data.typerent}</h5>
              </Col>
              <Col xs={2}>
                <h5>{data.bukti}</h5>
              </Col>
              <Col xs={2}>
                <h5>{data.status}</h5>
              </Col>
              <Col xs={1}>
                <img src={Search} alt='' onClick={this.showModal} />
              </Col>
            </Row>
          ))}
          <Row style={{ height: '30px' }}>
            <Col></Col>
          </Row>
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
                <h4>House Astina</h4>
                <p>JL.Tuanku Tambusai no500e ,Pekanbaru ,Riau</p>
              </Col>
              <Col xs={1}></Col>
              <Col xs={2} style={{ height: '200px' }}>
                <h4>Check-In</h4>
                <p>30 March 2020</p>
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
