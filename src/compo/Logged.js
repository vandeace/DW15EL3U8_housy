import React, { Component } from 'react';
import {
  Navbar,
  Dropdown,
  Form,
  Container,
  Button,
  FormControl,
  Nav,
} from 'react-bootstrap';
import Logo from '../pic/Icon.png';
import LoginPhoto from '../pic/login.png';
import Profile from '../pic/dropdown user/Profile.png';
import Ticket from '../pic/dropdown user/Ticket.png';
import Bill from '../pic/dropdown user/Bill.png';
import Logout from '../pic/dropdown user/Logout.png';
import { Link } from 'react-router-dom';
import Header from './header';

export default class Login extends Component {
  logout = () => {
    localStorage.getItem('auth');
    localStorage.clear();
    window.location.reload(true);
  };

  render() {
    return (
      <Container fluid>
        <Navbar className='justify-content-between' fixed='top'>
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
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  background: 'white',
                  border: 'white',
                  marginRight: '90px',
                  boxShadow: 'none',
                }}
              >
                <img src={LoginPhoto} alt=''></img>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href=''>
                  <Link to='/profile'>
                    <img src={Profile}></img>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href=''>
                  <Link to='./booking'>
                    <img src={Ticket}></img>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href=''>
                  <img src={Bill}></img>
                </Dropdown.Item>
                <Dropdown.Item href=''>
                  <img src={Logout} onClick={this.logout}></img>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
