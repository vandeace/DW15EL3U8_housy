import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Show from './content';
import Data from '../data/data.json';
import '../style/show.css';
import { Link } from 'react-router-dom';

export default class Cardroom extends Component {
  render() {
    return (
      <Container fluid className='content-bg'>
        <Link to='/property'>
          <div className='flex-container'>
            {Data.Property.map((data, i) => (
              <Show key={i} data={data} />
            ))}
          </div>
        </Link>
      </Container>
    );
  }
}
