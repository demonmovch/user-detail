import React, { Component, Fragment } from 'react';
import Header from './Header.jsx';
import Users from './Users.jsx';
import User from './User.jsx';
import Preloader from './Preloader.jsx';

import {observer} from 'mobx-react';
import appStore from '../store/appStore.js';

export default @observer class App extends Component {
  componentDidMount(){
    fetch('https://randomuser.me/api/?results=150&noinfo')
    .then(response => response.json())
    .then(({results}) => this.getUserData(results))
    .catch(error => console.log(error));
  }

  getUserData = (users) => {
    appStore.add(users);
    appStore.toggle();
  }

  render(){
    let {fetching, users} = appStore;

    return (
      <Fragment>
        { fetching && <Preloader /> }
      	<Header />
				<Users>
          { users.map( (data, index) => <User key={index} data={data} /> ) }
				</Users>      	
      </Fragment>
    );
  }
}