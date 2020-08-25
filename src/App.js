import React from 'react';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { CardList } from './components/card-list/card-list.component';
import  Nav  from './components/nav/nav.component';
import  HomePage  from './components/homepage/homepage.component';
import './App.css';
import userDetail from './components/user-detail/user-detail.component';
// import {SearchBox} from './components/search-box/search-box.component'
import Followers from './components/followers/followers.component';

function app(){
  return(
    <Router>
    <div className = "App">
    <Nav/>
    <Switch>
    <Route path="/" exact component={HomePage}/>
    <Route path="/:name"exact component = {userDetail}/>
    <Route path="/:name/followers" component={Followers}/>
    </Switch>
    </div>
    </Router>
  )
}



export default app;
