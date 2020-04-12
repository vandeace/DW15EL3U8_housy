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
import Transaction from '../pic/dropdown user/transaction.png';
import Addproperty from '../pic/dropdown user/addproperty.png';

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

                <Dropdown.Item>
                  <Link to='./addproperty'>
                    <Row>
                      <Col xs={2}>
                        <img src={Addproperty} alt=''></img>
                      </Col>
                      <Col xs={10}>
                        <h4
                          style={{
                            color: 'black',
                            marginTop: '10px',
                            marginLeft: '15px',
                            boxShadow: 'none',
                          }}
                        >
                          Add Property
                        </h4>
                      </Col>
                    </Row>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to='./transaction'>
                    <Row>
                      <Col xs={2}>
                        <img src={Transaction} alt=''></img>
                      </Col>
                      <Col xs={10}>
                        <h4
                          style={{
                            color: 'black',
                            marginTop: '10px',
                            marginLeft: '15px',
                            boxShadow: 'none',
                          }}
                        >
                          Transaction
                        </h4>
                      </Col>
                    </Row>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item href=''>
                  <img src={Logout} alt='' onClick={this.logout}></img>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar>
      </Container>
    );
  }
}
