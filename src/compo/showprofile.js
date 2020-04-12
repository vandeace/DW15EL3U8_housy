import React, { Component } from 'react';
import User from '../pic/user.png';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import Photo from '../pic/profile.png';
import Email from '../pic/email.png';
import Pass from '../pic/password.png';
import Status from '../pic/status.png';
import Gender from '../pic/gender.png';
import Telp from '../pic/telp.png';
import Address from '../pic/address.png';
import Header from './header';

export default class Profile extends Component {
  state = {
    modal: false,
  };
  showModal = () => {
    this.setState({ modal: true });
  };
  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    return (
      <div>
        <div
          style={{
            backgroundColor: '#f5fffa',
            margin: 'auto',
            marginTop: '30px',
            width: '40%',
            height: '600px',
            border: '1px solid black',
            borderRadius: '8px',
            padding: '10px',
            display: 'grid',
            gridTemplateColumns: '60% 40%',
          }}
        >
          <div style={{ marginTop: '20px' }}>
            <h2 style={{ marginLeft: '25px' }}>Personal Info</h2>
            <Container fluid>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={User}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>Jafar Sidik</Row>
                  <Row style={{ fontSize: 'Small' }}>Fullname</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={Email}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>jafar@ganteng.com</Row>
                  <Row style={{ fontSize: 'Small' }}>Email</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={Pass}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>
                    <a>
                      <label onClick={this.showModal}>Change Password</label>
                    </a>
                  </Row>
                  <Row style={{ fontSize: 'Small' }}>Password</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={Status}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>Tenant</Row>
                  <Row style={{ fontSize: 'Small' }}>Status</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={Gender}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>Male</Row>
                  <Row style={{ fontSize: 'Small' }}>Gender</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={Telp}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>08123456789</Row>
                  <Row style={{ fontSize: 'Small' }}>No Telp</Row>
                </Col>
              </Row>
              <Row>
                <Col
                  md={1}
                  style={{ paddingTop: '10px', marginBottom: '30px' }}
                >
                  <img src={Address}></img>
                </Col>
                <Col md={6} style={{ marginLeft: '20px' }}>
                  <Row style={{ fontSize: 'Large' }}>Pekanbaru</Row>
                  <Row style={{ fontSize: 'Small' }}>Address</Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div>
            <img
              src={Photo}
              style={{
                width: '280px',
                height: '345px',
                marginTop: '30px',
              }}
            ></img>
            <br />
            <Button
              variant='primary'
              style={{ marginTop: '10px', marginLeft: '60px' }}
            >
              Change Photo Profile
            </Button>
          </div>
        </div>
        <Modal show={this.state.modal} onHide={this.closeModal}>
          <Modal.Header closeButton>CHANGE PASSWORD</Modal.Header>
          <Modal.Body>
            <Form.Group controlId='oldPassword'>
              <Form.Label>Old Password</Form.Label>
              <Form.Control type='password' placeholder='Input Old Password' />
            </Form.Group>
            <Form.Group controlId='newPassword'>
              <Form.Label>New Password</Form.Label>
              <Form.Control type='password' placeholder='Input New Password' />
            </Form.Group>
            <Form.Group controlId='confirmPassword'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm New Password'
              />
            </Form.Group>
            <Form.Group>
              <Button
                variant='primary'
                style={{ marginLeft: '150px' }}
                onClick={this.closeModal}
              >
                SAVE CHANGES
              </Button>
            </Form.Group>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
