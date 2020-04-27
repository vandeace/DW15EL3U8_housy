import React, { Component } from 'react';
import TransactionItem from '../compo/transaction';
import { connect } from 'react-redux';
import * as actOrder from '../_action/order';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/transaction.css';
import '../style/transaction_item.css';

class ShowTransaction extends Component {
  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials'));
    this.props.dispatch(actOrder.getOrders(data.token));
  }

  render() {
    const order = this.props.order;
    console.log(order);
    const transaction = order.data.map((item, index) => (
      <TransactionItem item={item} key={index} />
    ));
    return (
      <div>
        <div>
          <div className='transaction-bg'>
            <h3 className='transaction-title'>Incoming Transaction</h3>
            <div className='transaction-area'>
              <Container fluid className='transaction-item-area'>
                <Row>
                  <Col xs={2} className='transaction-text'>
                    No
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Users
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Type Of Rent
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Bukti Transfer
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Status Payment
                  </Col>
                  <Col xs={2} className='transaction-text'>
                    Action
                  </Col>
                </Row>
                <p className='transaction-item-line' />
              </Container>
              {transaction}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

export default connect(mapStateToProps)(ShowTransaction);
