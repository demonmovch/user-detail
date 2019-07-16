import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Header from './Header';
import Users from './Users';
import User from './User';
import Preloader from './Preloader';
import ErrorCatcher from './ErrorCatcher';
import appStore from '../store/appStore';

@observer
export default class App extends Component {
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=100&noinfo')
      .then(response => response.json())
      .then(({ results }) => this.getUserData(results))
      .catch(error => console.log(error));
  }

  getUserData = users => {
    appStore.add(users);
    appStore.toggle();
  };

  render() {
    const { fetching, users } = appStore;

    return (
      <ErrorCatcher>
        {fetching && <Preloader />}
        <Header />
        <Users>
          {users.map((data, index) => (
            <User key={index} data={data} />
          ))}
        </Users>
      </ErrorCatcher>
    );
  }
}
