import React, { Component } from 'react';
import { Form, Modal, Dropdown, DropdownButton, Button } from 'react-bootstrap';

export default class ModalSignUp extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Modal
          show={this.props.visible}
          onHide={this.props.onClose}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <h1 style={{ textAlign: 'center' }}>SIGN UP</h1>
              <Form.Group controlId='formBasicName'>
                <Form.Label>Fullname</Form.Label>
                <Form.Control type='email' placeholder='Enter Fullname' />
              </Form.Group>
              <Form.Group controlId='formBasicUname'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter Username' />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
              </Form.Group>
              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
              </Form.Group>
              <Form.Group>
                <Form.Label>List as</Form.Label>
                <DropdownButton
                  id='dropdown-basic-button'
                  title='Select your status'
                >
                  <Dropdown.Item href='#/action-1'>User</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Owner</Dropdown.Item>
                </DropdownButton>
              </Form.Group>{' '}
              <Form.Group>
                <Form.Label>Gender</Form.Label>
                <DropdownButton
                  id='dropdown-basic-button'
                  title='Select your gender'
                >
                  <Dropdown.Item href='#/action-1'>Male</Dropdown.Item>
                  <Dropdown.Item href='#/action-2'>Female</Dropdown.Item>
                </DropdownButton>
              </Form.Group>
              <Form.Group controlId='exampleForm.ControlTextarea1'>
                <Form.Label>Address</Form.Label>
                <Form.Control as='textarea' rows='3' />
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant='primary'
                  style={{ display: 'flex', justifyContent: 'center' }}
                  onClick={this.props.signInClick}
                >
                  SIGN IN
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
