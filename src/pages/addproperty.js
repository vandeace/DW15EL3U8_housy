import React, { Component } from 'react';
import Form from '../compo/addform';
import Login from '../compo/login';
import { Container } from 'react-bootstrap';

export default class AddProperty extends Component {
  render() {
    return (
      <div>
        <Login />
        <Container
          fluid
          style={{ width: '40%', marginTop: '100px', height: '800px' }}
        >
          <Form />
        </Container>
      </div>
    );
  }
}
