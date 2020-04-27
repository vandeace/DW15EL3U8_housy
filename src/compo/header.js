import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  Nav,
  Navbar,
  Form,
  Container,
  FormControl,
  Button,
  Modal,
} from 'react-bootstrap';
import '../style/header.css';

import Logo from '../pic/Icon.png';

class Header extends Component {
  state = {
    signIn: false,
    signUp: false,
    email: '',
    password: '',
    userData: null,
  };

  componentDidMount() {
    this.handleCheckLogin();
  }
  handleChangeTxt = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleCheckLogin = () => {
    const user = localStorage.getItem('auth');
    if (user) {
      this.setState({ userData: JSON.parse(user) });
    }
  };

  // handleLogin = () => {
  //   const user = { email: this.state.email, password: this.state.password };
  //   this.setState({ userData: user });
  //   localStorage.setItem('auth', JSON.stringify(user));
  // };

  handleLogOut = () => {
    this.setState({ userData: null });
    localStorage.clear();
  };

  showSignIn = () => {
    this.setState({ signIn: true });
  };

  closeSignIn = () => {
    this.setState({ signIn: false });
  };

  showSignUp = () => {
    this.setState({ signUp: true });
  };

  closeSignUp = () => {
    this.setState({ signUp: false });
  };

  handleLogin = async () => {
    try {
      const user = await axios.post('http://localhost:5000/api/v1/login', {
        email: this.state.email,
        password: this.state.password,
      });
      const { data } = user.data;
      localStorage.setItem('credentials', JSON.stringify(data));
      localStorage.setItem('auth', 'true');
      console.log(data.role);
      window.location.reload(false);
      this.setState({ signIn: false });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container fluid>
        <Navbar className='justify-content-between'>
          <Navbar.Brand>
            <Link to='./'>
              <img src={Logo} alt=''></img>
            </Link>
          </Navbar.Brand>

          <Form inline>
            <FormControl type='text' placeholder='Tangerang Selatan' />
            <div className='home-search-line' />
            <Button variant='outline-success'>Search</Button>
          </Form>
          <Nav>
            <Button variant='white' onClick={this.showSignIn} size='lg'>
              Sign In
            </Button>
            <Button variant='dark' onClick={this.showSignUp} size='lg'>
              Sign Up
            </Button>
          </Nav>
        </Navbar>

        <Modal
          show={this.state.signUp}
          onHide={this.closeSignUp}
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <h1 style={{ textAlign: 'center' }}>SIGN UP</h1>
              <Form.Group controlId='signUpName'>
                <Form.Label>Fullname</Form.Label>
                <Form.Control type='email' placeholder='Enter Fullname' />
              </Form.Group>
              <Form.Group controlId='signUpUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='Enter Username' />
              </Form.Group>
              <Form.Group controlId='singUpEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Enter Email' />
              </Form.Group>
              <Form.Group controlId='signUpPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
              </Form.Group>
              <Form.Group controlId='signUpStatus'>
                <Form.Label>List As</Form.Label>
                <Form.Control as='select' required>
                  <option>Tenant</option>
                  <option>Owner</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='signUpGender'>
                <Form.Label>Gender</Form.Label>
                <Form.Control as='select' required>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId='singUpAddress'>
                <Form.Label>Address</Form.Label>
                <Form.Control as='textarea' rows='3' />
              </Form.Group>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant='primary'
                  style={{ display: 'flex', justifyContent: 'center' }}
                  onClick={this.closeSignUp}
                >
                  SIGN UP
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal
          size='lg'
          aria-labelledby='contained-modal-title-vcenter'
          centered
          show={this.state.signIn}
          onHide={this.closeSignIn}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form>
              <h1 style={{ textAlign: 'center' }}>SIGN IN</h1>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name='email'
                  type='email'
                  placeholder='Enter email'
                  onChange={this.handleChangeTxt}
                  value={this.state.email}
                />
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='password'
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChangeTxt}
                  value={this.state.password}
                />
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
                  onClick={this.handleLogin}
                >
                  SIGN IN
                </Button>
              </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <p
              onClick={() => {
                this.closeSignIn();
                this.showSignUp();
              }}
            >
              Don't have an account? <b>Click Here!</b>
            </p>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default Header;
