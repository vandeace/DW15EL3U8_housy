import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../compo/filternav';
import Content from '../compo/showContent';
import Login from '../compo/login';

export default class Home extends Component {
  render() {
    return (
      <>
        <Login />
        <Container fluid style={{ marginTop: '100px' }}>
          <Row>
            <Col md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <Content />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
