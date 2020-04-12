import React, { Component } from 'react';
import '../style/filter.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default class Filter extends Component {
  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Form>
          <h2 className='filter-bold-text'>Type of Rent</h2>
          <Button className='btn' variant='outline-secondary'>
            Date
          </Button>{' '}
          <Button className='btn' variant='outline-secondary'>
            Month
          </Button>{' '}
          <Button className='btn' variant='outline-secondary'>
            Year
          </Button>
          <h2 lassName='filter-bold-text'>Date</h2>
          <Form.Group controlId='filterDate'>
            <Form.Control type='date' required />
          </Form.Group>
          <h2 className='filter-bold-text'>Property Room</h2>
          <label />
          Bedroom
          <br />
          <Button variant='outline-secondary'>1</Button>{' '}
          <Button variant='outline-secondary'>2</Button>{' '}
          <Button variant='outline-secondary'>3</Button>{' '}
          <Button variant='outline-secondary'>4</Button>{' '}
          <Button variant='outline-secondary'>5</Button> <br /> <label />
          Bathroom
          <br />
          <Button variant='outline-secondary'>1</Button>{' '}
          <Button variant='outline-secondary'>2</Button>{' '}
          <Button variant='outline-secondary'>3</Button>{' '}
          <Button variant='outline-secondary'>4</Button>{' '}
          <Button variant='outline-secondary'>5</Button> <br />
          <h2 className='filter-bold-text'>Amenities</h2>
          <label>Furnished </label>{' '}
          <input type='checkbox' className='check'></input>
          <br />
          <label>Pet Allowed </label>{' '}
          <input type='checkbox' className='check'></input> <br />
          <label>Shared Acomodation </label>{' '}
          <input type='checkbox' className='check'></input>
          <h2 className='filter-bold-text'>Budget</h2>
          <label>Less than IDR.</label>
          {'      '} <input type='string' className='check'></input>
          <br />
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
