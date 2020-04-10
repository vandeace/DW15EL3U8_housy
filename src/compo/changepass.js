import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default class Changepass extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Modal show={this.props.visible} onHide={this.props.onClose}>
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
                onClick={this.props.cancelPass}
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
