import React, { Component } from 'react';
import {
  Navbar,
  Dropdown,
  Form,
  Container,
  Button,
  FormControl,
  Nav,
  Row,
  Col,
} from 'react-bootstrap';
import Logo from '../pic/Icon.png';
import LoginPhoto from '../pic/login.png';
import Profile from '../pic/dropdown user/Profile.png';
import Ticket from '../pic/dropdown user/Ticket.png';
import Bill from '../pic/dropdown user/Bill.png';
import Logout from '../pic/dropdown user/Logout.png';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  logout = () => {
    localStorage.getItem('auth');
    localStorage.clear();
    window.location.reload(true);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={1}>
            <Navbar.Brand>
              <Link to='./' style={{ textDecoration: 'none' }}>
                <img src={Logo} alt=''></img>
              </Link>
            </Navbar.Brand>
          </Col>
          <Col xs={4}></Col>
          <Col style={{ marginTop: '20px' }} xs={3}>
            <Form inline>
              <FormControl type='text' placeholder='Tangerang Selatan' />
              <div className='home-search-line' />
              <Button variant='outline-success'>Search</Button>
            </Form>
          </Col>
          <Col xs={3}></Col>
          <Col xs={1}>
            <Nav>
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    background: 'white',
                    border: 'white',
                    boxShadow: 'none',
                  }}
                >
                  <img src={LoginPhoto} alt=''></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href=''>
                    <Link to='/profile'>
                      <img src={Profile} alt=''></img>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href=''>
                    <Link to='/booking'>
                      <img src={Ticket} alt=''></img>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item href=''>
                    <Link to='/history'>
                      <img src={Bill} alt=''></img>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item style={{ borderTop: '3px solid grey' }}>
                    <img src={Logout} alt='' onClick={this.logout}></img>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Col>
        </Row>
      </Container>
    );
  }
}
