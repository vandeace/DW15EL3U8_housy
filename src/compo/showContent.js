import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Show from './content';
import Data from '../data/data.json';
import '../style/show.css';

export default class Cardroom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container fluid className='content-bg'>
        <div className='flex-container'>
          {Data.Property.map((data, i) => (
            <Show key={i} data={data} />
          ))}
        </div>
      </Container>
    );
  }
}
