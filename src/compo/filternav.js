import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

export default class Filter extends Component {
  state = {
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <Container style={{ marginTop: '20px' }}>
        <Form>
          <h2>Type of Rent</h2>
          <Button variant='outline-secondary'>Date</Button>{' '}
          <Button variant='outline-secondary'>Month</Button>{' '}
          <Button variant='outline-secondary'>Year</Button> <h2>Date</h2>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
          <h2>Property Room</h2>
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
          <h2>Amenities</h2>
          <label>Furnished </label>{' '}
          <input type='checkbox' className='check'></input>
          <br />
          <label>Pet Allowed </label>{' '}
          <input type='checkbox' className='check'></input> <br />
          <label>Shared Acomodation </label>{' '}
          <input type='checkbox' className='check'></input>
          <h2>Budget</h2>
          <label>Less than IDR.</label>
          {'      '} <input type='string' className='check'></input>
          <br />
          <Button variant='primary' type='submit' className='btn-filter'>
            Apply
          </Button>
        </Form>
      </Container>
    );
  }
}
