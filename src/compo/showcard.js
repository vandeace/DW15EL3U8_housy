import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardData from './datacard';
import data from './data/data';

export default class Datacard extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className='cardBX'>
            {data.Property.map((data, i) => (
              <Col>
                <CardData key={i} data={data} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
