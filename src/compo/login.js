import React, { Component } from 'react';
import Logged from './Logged';
import Header from './header';

export default class Login extends Component {
  state = {
    isLogin: null,
  };

  componentDidMount() {
    const user = localStorage.getItem('auth');
    console.log(user);
    if (user) {
      this.setState({ isLogin: true });
    } else {
      this.setState({ isLogin: false });
    }
  }

  render() {
    if (this.state.isLogin) {
      return <Logged />;
    } else {
      return <Header />;
    }
  }
}
