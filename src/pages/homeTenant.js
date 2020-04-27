import React, { Component } from 'react';
import Login from '../compo/login';
import Filter from '../compo/filternav';
import Content from '../compo/showContent';
import { Container, Row, Col } from 'react-bootstrap';

export default class homeTenant extends Component {
  render() {
    return (
      <div>
        <Login />
        <Container fluid>
          <Row>
            <Col md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
