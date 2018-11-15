import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Include/bootstrap';
import Header from './Components/Header/Header.js';
import {Home} from './Components/Home/Home.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Login} from './Components/Login/Login.js';
import {UserRoles} from './Components/UserRoles/UserRoles.js';
import {ViewReimbursements} from './Components/Reimbursements/ViewReimbursements.js';
import {AddReimbursement} from './Components/Reimbursements/AddReimbursement.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
        </BrowserRouter>
        <BrowserRouter>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/userRoles" component={UserRoles} />
            <Route path="/reimbursements" component={ViewReimbursements}/>
            <Route path="/add" component={AddReimbursement} />
            <Route path="/" component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
