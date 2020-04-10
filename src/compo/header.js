import React, { Component } from 'react';
import {
  Container,
  Row,
  FormControl,
  Col,
  Form,
  Button,
  Jumbotron,
  DropdownButton,
  Dropdown,
  Modal,
} from 'react-bootstrap';
import logo from '../pic/Icon.png';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <Jumbotron fluid style={{ margin: '0 0' }}>
            <Container>
              <Row>
                <Col>
                  <span>
                    <img src={logo} alt='logo' />
                  </span>
                </Col>
                <Col>
                  <Form inline className='search'>
                    <FormControl
                      type='text'
                      placeholder='Tangerang Selatan'
                      className='mr-sm-2'
                    />
                    <Button variant='outline-success'>Search</Button>
                  </Form>
                </Col>
                <Col style={{ marginLeft: '40px', paddingRight: '0' }}>
                  <div className='sign'>
                    <Container>
                      <Row>
                        <Col>
                          <Button
                            onClick={this.props.signInClick}
                            variant='light'
                            style={{ marginRight: '20px' }}
                          >
                            Sign In
                          </Button>
                        </Col>
                        <Col>
                          <Button
                            onClick={this.props.signUpClick}
                            variant='dark'
                          >
                            Sign Up
                          </Button>
                          {/* <Signup
                            visible={this.state.modalu}
                            onClose={this.signupClose}
                          /> */}
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
