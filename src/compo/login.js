import React, { Component } from 'react';
import TenantHeader from './tenantHeader';
import Header from './header';
import OwnerHeader from './ownerHeader';
import * as actUser from '../_action/user';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: null,
      data: [],
    };
  }

  componentDidMount() {
    const data = JSON.parse(localStorage.getItem('credentials'));

    const user = localStorage.getItem('auth');
    // console.log(this.state.data.role);
    if (user) {
      this.setState({ isLogin: true });
      this.props.dispatch(actUser.setToken(data.token));
      this.props.dispatch(actUser.getUsers(data.token));
    } else {
      this.setState({ isLogin: false });
    }
  }

  render() {
    const role = this.props.users.data.role;
    if (this.state.isLogin) {
      if (role === 'owner') {
        return <OwnerHeader />;
      }
      return <TenantHeader />;
    } else {
      return <Header />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps)(Login);
