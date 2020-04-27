import React, { Component } from 'react';
import '../style/filter.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default class Filter extends Component {
  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Form>
          <h2 className='filter-bold-text'>Type of Rent</h2>
          <Row style={{ marginLeft: '-30px' }}>
            <Col xs={4}>
              <Button className='btn' variant='outline-secondary'>
                Date
              </Button>
            </Col>
            <Col xs={4}>
              <Button className='btn' variant='outline-secondary'>
                Month
              </Button>
            </Col>
            <Col xs={4}>
              <Button className='btn' variant='outline-secondary'>
                Year
              </Button>
            </Col>
          </Row>
          <h2 className='filter-bold-text'>Property Room</h2>
          <label />
          Bedroom
          <Row style={{ marginTop: 20 }}>
            <Col xs={2}>
              <Button variant='outline-secondary'>1</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>2</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>3</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>4</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>5</Button>
            </Col>
          </Row>
          <label style={{ marginTop: 20 }} />
          Bathroom
          <Row style={{ marginTop: 20 }}>
            <Col xs={2}>
              <Button variant='outline-secondary'>1</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>2</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>3</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>4</Button>
            </Col>
            <Col xs={2}>
              <Button variant='outline-secondary'>5</Button>
            </Col>
          </Row>
          <h2 className='filter-bold-text'>Amenities</h2>
          <Row>
            <Col xs={6}>
              <label>Furnished </label>
            </Col>
            <Col xs={3}></Col>
            <Col xs={3}>
              <input type='checkbox' className='check'></input>
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <label>Pet Allowed </label>{' '}
            </Col>
            <Col xs={3}></Col>
            <Col xs={3}>
              <input type='checkbox' className='check'></input>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <label>Shared Acomodation </label>
            </Col>
            <Col xs={3}>
              <input type='checkbox' className='check'></input>
            </Col>
          </Row>
          <h2 className='filter-bold-text'>Budget</h2>
          <Row>
            <Col xs={5}>
              <label>Less than IDR.</label>
            </Col>
            <Col xs={7}>
              <input
                type='string'
                className='check'
                style={{ width: 150 }}
              ></input>
            </Col>
          </Row>
        </Form>
        <Row style={{ marginTop: '20px' }}>
          <Col xs={4}></Col>
          <Col xs={8}>
            <Button variant='primary' size='lg'>
              APPLY
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
