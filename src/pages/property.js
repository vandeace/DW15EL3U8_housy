import React, { Component } from 'react';
import Login from '../compo/login';
import Property from '../compo/showproperty';
import { Container } from 'react-bootstrap';

export default class property extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Login />
        <Container fluid style={{ marginTop: '100px' }}>
          <Property />
        </Container>
      </div>
    );
  }
}
