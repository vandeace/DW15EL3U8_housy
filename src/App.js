import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AddProperty from './pages/addproperty';
import Profile from './pages/profile';
import Booking from './pages/booking';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/addproperty' exact component={AddProperty} />
          <Route path='/booking' exact component={Booking} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
