import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

class Signin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Modal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={this.props.visible}
          onHide={this.props.onClose}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <h1 style={{ textAlign: 'center' }}>SIGN IN</h1>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password' />
              </Form.Group>
              <Form.Group controlId='formBasicCheckbox'>
                <Form.Text className='text-muted'>
                  Dont have an account? Click Here
                </Form.Text>
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant='primary'
                  style={{ display: 'flex', justifyContent: 'center' }}
                  onClick={this.props.onCLose}
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

export default Signin;
