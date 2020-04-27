import React, { Component } from 'react';
import { Container, Col } from 'react-bootstrap';
import Show from './content';
import '../style/content.css';
import '../style/show.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actHouse from '../_action/house';

class showContent extends Component {
  componentDidMount() {
    this.props.dispatch(actHouse.getHouses());
  }

  render() {
    const house = this.props.house;
    const data = house.data.map((item, index) => (
      <Link
        to={`/property/${item.id}`}
        style={{ textDecoration: 'none', color: 'black' }}
        key={index}
      >
        <Show item={item} key={index} />
      </Link>
    ));
    return (
      <Container fluid className='content-bg'>
        <div className='flex-container'>{data}</div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    house: state.house,
  };
};

export default connect(mapStateToProps)(showContent);
