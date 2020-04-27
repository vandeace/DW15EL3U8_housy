import React, { Component } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import Login from '../compo/login';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { connect } from 'react-redux';
import axios from 'axios';

class property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: false,
      data: [],
    };
  }
  now = moment().format('LLLL');

  showModal = () => {
    this.setState({ book: true });
  };
  closeModal = () => {
    this.setState({ book: false });
  };
  async componentDidMount() {
    const id = this.props.match.params.id;
    const house = await axios({
      method: 'GET',
      url: `http://localhost:5000/api/v1/house/${id}`,
    });
    this.setState({ data: house.data.data });
    console.log(this.state.data);
  }

  render() {
    const property = this.state.data;
    return (
      <div>
        <Login />
        <Container fluid style={{ width: '60%' }}>
          <Row>
            <Col xs={12}>
              <img
                src={process.env.PUBLIC_URL + `../pictures/big.png`}
                style={{ width: '1100px', height: '250px' }}
                alt=''
              ></img>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col xs={4}>
              <img
                src={process.env.PUBLIC_URL + `../pictures/big1.png`}
                alt=''
              ></img>
            </Col>
            <Col xs={4} style={{}}>
              <img
                src={process.env.PUBLIC_URL + `../pictures/big2.png`}
                alt=''
                style={{ paddingLeft: '12px' }}
              ></img>
            </Col>
            <Col xs={4} style={{ paddingRight: '15px' }}>
              <img
                src={process.env.PUBLIC_URL + `../pictures/big3.png`}
                alt=''
                style={{ paddingLeft: '15px' }}
              ></img>
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col>
              <h1></h1>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <h3 style={{ textTransform: 'uppercase' }}>{property.name}</h3>
              <p style={{ textTransform: 'uppercase' }}>{property.city}</p>
              <p style={{ textTransform: 'capitalize' }}>{property.address}</p>
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
                  <h6>{property.bedroom}</h6>
                </Col>
                <Col xs={4}>
                  <h6>{property.bathroom}</h6>
                </Col>
                <Col xs={4}>
                  <h6>200ft</h6>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row style={{ marginLeft: '0px' }}>
            <h5>Description</h5>
          </Row>
          <Row style={{ marginLeft: '0px' }}>lorem ipsum</Row>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    house: state.house,
  };
};

export default connect(mapStateToProps)(property);
