import React, { Component } from 'react';
import { Navbar, Dropdown, Container, Row, Col } from 'react-bootstrap';
import Logo from '../pic/Icon.png';
import LoginPhoto from '../pic/login.png';
import Profile from '../pic/dropdown user/Profile.png';
import Logout from '../pic/dropdown user/Logout.png';
import { Link } from 'react-router-dom';
import History from '../pic/dropdown owner/History.png';
import Addproperty from '../pic/dropdown owner/addProperty.png';

export default class ownerHeader extends Component {
  logout = () => {
    localStorage.getItem('auth');
    localStorage.clear();
    window.location.reload(true);
  };

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={1}>
              <Navbar.Brand>
                <Link to='./'>
                  <img src={Logo} alt=''></img>
                </Link>
              </Navbar.Brand>
            </Col>
            <Col xs={10}></Col>
            <Col xs={1}>
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
                  <Dropdown.Item href='' style={{ paddingRight: '50px' }}>
                    <Link to='/profile'>
                      <img src={Profile} alt=''></img>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to='./addproperty'>
                      <img src={Addproperty} alt=''></img>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to='./history'>
                      <img src={History} alt=''></img>
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href=''
                    style={{ borderTop: '3px solid grey' }}
                  >
                    <img src={Logout} alt='' onClick={this.logout}></img>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
