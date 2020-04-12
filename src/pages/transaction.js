import React, { Component } from 'react';
import Login from '../compo/login';
import Data from '../compo/showtransaction';
import { Container } from 'react-bootstrap';

export default class Transaction extends Component {
  render() {
    return (
      <div>
        <Login />
        <Container fluid style={{ width: '80%', marginTop: '100px' }}>
          <Data />
        </Container>
      </div>
    );
  }
}
