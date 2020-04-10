import React, { Component } from 'react';
import Prof from '../compo/showprofile';
import Modal from '../compo/changepass';

export default class profile extends Component {
  state = {
    modalChangePass: false,
  };
  render() {
    return (
      <div>
        <Prof
          changePass={() => this.setState({ modalChangePass: true })}
          cancelPass={() => this.setState({ modalChangePass: false })}
        />
        <Modal
          visible={this.state.modalChangePass}
          onClose={() => this.setState({ modalSign: false })}
        />
      </div>
    );
  }
}
