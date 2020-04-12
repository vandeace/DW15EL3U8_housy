import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default class Addform extends Component {
  render() {
    return (
      <div>
        <div>
          <Form>
            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
                <h3>Add Property</h3>
              </Col>
              <Col xs={4}></Col>
            </Row>

            <Form.Group>
              <Form.Group controlId='NameProperty'>
                <Form.Label>Name Property</Form.Label>
                <Form.Control
                  type='text'
                  style={{ backgroundColor: '#c8d2e3' }}
                />
              </Form.Group>
              <Form.Group controlId='typeRent'>
                <Form.Label>City</Form.Label>
                <Form.Control
                  as='select'
                  required
                  style={{ backgroundColor: '#c8d2e3' }}
                >
                  <option>Pekanbaru</option>
                  <option>Padang</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                  <option>Banten</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as='textarea'
                  rows='3'
                  style={{ backgroundColor: '#c8d2e3' }}
                />
              </Form.Group>
              <Form.Group controlId='Price'>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type='text'
                  style={{ backgroundColor: '#c8d2e3' }}
                />
              </Form.Group>
              <Form.Group controlId='typeRent'>
                <Form.Label>Type of Rent</Form.Label>
                <Form.Control
                  as='select'
                  style={{ backgroundColor: '#c8d2e3' }}
                  required
                >
                  <option>Year</option>
                  <option>Month</option>
                  <option>Day</option>
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Amenities</Form.Label>
                <Row>
                  <Col xs={4}>
                    <Form.Check type='checkbox' label='Furnished' />
                  </Col>
                  <Col xs={4}>
                    <Form.Check type='checkbox' label='Pet Allowed' />
                  </Col>
                  <Col xs={4}>
                    <Form.Check type='checkbox' label='Shared Acomodation' />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId='typeRent'>
                <Form.Label>Bedroom</Form.Label>
                <Form.Control
                  as='select'
                  required
                  style={{ backgroundColor: '#c8d2e3' }}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='typeRent'>
                <Form.Label>Bathroom</Form.Label>
                <Form.Control
                  as='select'
                  style={{ backgroundColor: '#c8d2e3' }}
                  required
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Control>
              </Form.Group>
            </Form.Group>
            <Row>
              <Col xs={4}></Col>
              <Col xs={4}>
                <Button variant='primary'>SAVE</Button>{' '}
              </Col>
              <Col xs={4}></Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}
