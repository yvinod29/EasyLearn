import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Homepage/Home.js';
import SignIn from '../signincomponent/SignIn.js'; 
import SignUp from '../signincomponent/SignUp.js';
import ProfilePage from '../Accountpage/Profile.js';
function App() {
  return (
    <Router>
      <div>
        <Switch>
           
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp}/>
          <Route path="/account" component={ProfilePage}/>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
