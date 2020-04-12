import React, { Component } from 'react';
import Login from '../compo/login';
import Book from '../compo/bookingdata';
import { Container } from 'react-bootstrap';

export default class booking extends Component {
  render() {
    return (
      <div>
        <Login />
        <Container fluid style={{ marginTop: '100px' }}>
          <Book />
        </Container>
      </div>
    );
  }
}
