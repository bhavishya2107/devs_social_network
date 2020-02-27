import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Profiles from './components/layout/Profiles'
import Dashboard from './components/layout/Dashboard';
import AddExperience from './components/layout/AddExperience';
import AddEducation from './components/layout/AddEducation';
import EditProfile from './components/layout/EditProfile';
import UserProfile from './components/layout/UserProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/register'><Register /></Route>
          <Route path='/login'><Login /></Route>
          <Route path='/profiles'><Profiles /></Route>
          <Route path='/dashboard'><Dashboard /></Route>
          <Route path='/add-experience'><AddExperience /></Route>
          <Route path='/add-education'><AddEducation /></Route>
          <Route path='/edit-profile'><EditProfile /></Route>
          <Route path='/user-profile'><UserProfile /></Route>
          <Route path='/'><Landing /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;