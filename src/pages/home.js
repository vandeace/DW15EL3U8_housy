import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeOwner from './homeOwner';
import HomeTenant from './homeTenant';

class Home extends Component {
  render() {
    const role = this.props.users.data.role;
    if (role === 'owner') {
      return <HomeOwner />;
    } else {
      return <HomeTenant />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.user,
  };
};

export default connect(mapStateToProps)(Home);
