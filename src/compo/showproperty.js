import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import Data from '../data/property.json';
import * as moment from 'moment';
import 'moment/locale/pt-br';

export default class Showproperty extends Component {
  now = moment().format('LLLL');
  state = {
    book: false,
  };
  showModal = () => {
    this.setState({ book: true });
  };
  closeModal = () => {
    this.setState({ book: false });
  };
  render() {
    return Data.map((item) => (
      <div>
        <Container fluid style={{ width: '60%' }}>
          <Row>
            <Col xs={12}>
              <img
                src={item.picture1}
                style={{ width: '100%', height: '250px' }}
                alt=''
              ></img>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={4}>
              <img src={item.picture2} alt=''></img>
            </Col>
            <Col xs={4} style={{}}>
              <img
                src={item.picture3}
                alt=''
                style={{ paddingLeft: '12px' }}
              ></img>
            </Col>
            <Col xs={4} style={{ paddingRight: '15px' }}>
              <img
                src={item.picture4}
                alt=''
                style={{ paddingLeft: '15px' }}
              ></img>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <h1>{item.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h3>{item.price}</h3>
              <p>{item.location}</p>
            </Col>
            <Col xs={4}></Col>
            <Col>
              <Row xs={4}>
                <Col xs={4}>
                  <h6>Bedroom</h6>
                </Col>
                <Col xs={4}>
                  <h6>Bathroom</h6>
                </Col>
                <Col xs={4}>
                  <h6>Area</h6>
                </Col>
              </Row>
              <Row xs={4}>
                <Col xs={4}>
                  <h6>{item.bedrooms}</h6>
                </Col>
                <Col xs={4}>
                  <h6>{item.bathrooms}</h6>
                </Col>
                <Col xs={4}>
                  <h6>{item.area}</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginLeft: '5px' }}>
            <h5>Description</h5>
          </Row>
          <Row style={{ marginLeft: '5px' }}>{item.description}</Row>
          <Row>
            <Col xs={10}></Col>
            <Col>
              <Button variant='primary' onClick={this.showModal}>
                BOOK NOW
              </Button>
            </Col>
          </Row>
        </Container>

        <Modal show={this.state.book} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              <h5>HOW LONG U WILL STAY</h5>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId='start'>
                <Form.Label>Check-In</Form.Label>
                <Form.Control name='dateStart' type='date' />
                <Form.Label>Check-Out</Form.Label>
                <Form.Control name='dateEnd' type='date' />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={this.closeModal}>
              ORDER
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    ));
  }
}
