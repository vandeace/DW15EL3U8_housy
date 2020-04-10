import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../compo/filternav';
import Header from '../compo/header';
import Data from '../compo/showcard';

import ModalSignIn from '../compo/signmodal';
import ModalSingUp from '../compo/modalsignup';

export default class Home extends Component {
  state = {
    modalSign: false,
    modalSingUp: false,
  };

  render() {
    return (
      <>
        <Header
          signInClick={() => this.setState({ modalSign: true })}
          signUpClick={() => this.setState({ modalSingUp: true })}
        />
        <Container fluid>
          <Row>
            <Col md={3}>
              <Filter />
            </Col>
            <Col md={9}>
              <Data />
            </Col>
          </Row>
        </Container>
        <ModalSignIn
          visible={this.state.modalSign}
          onClose={() => this.setState({ modalSign: false })}
        />
        <ModalSingUp
          visible={this.state.modalSingUp}
          onClose={() => this.setState({ modalSingUp: false })}
        />
      </>
    );
  }
}
