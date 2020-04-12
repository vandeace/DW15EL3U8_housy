import React, { Component } from 'react';
import Login from '../compo/login';
import History from '../compo/historydata';
import { Container } from 'react-bootstrap';

export default class history extends Component {
  render() {
    return (
      <div>
        <Login />
        <Container fluid style={{ marginTop: '100px' }}>
          <History />
        </Container>
      </div>
    );
  }
}
