import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import AddProperty from './pages/addproperty';
import Profile from './pages/profile';
import Booking from './pages/booking';
import History from './pages/history';
import Property from './pages/property';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/addproperty' exact component={AddProperty} />
          <Route path='/booking' exact component={Booking} />
          <Route path='/history' exact component={History} />
          <Route path='/property' exact component={Property} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
