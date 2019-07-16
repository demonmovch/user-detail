import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ErrorCatcher from './ErrorCatcher';
import appStore from '../store/appStore';

@observer
export default class Header extends Component {
  userSearch = (event, node) => {
    const filter = node.value.toUpperCase(); // сохраняем текущее значение поля ввода
    const result = appStore.usersSaved.filter(
      item => item.name.first.toUpperCase().indexOf(filter) > -1
    );
    appStore.search(result);
  };

  setInputRef = node => {
    if (node) {
      node.addEventListener('keyup', event => this.userSearch(event, node));
    }
  };

  render() {
    return (
      <ErrorCatcher>
        <header className='form-section'>
          <div className='container'>
            <form className='form'>
              <input
                type='text'
                placeholder='Search for first names'
                className='form__input'
                id='form__input'
                ref={this.setInputRef}
              />
              <div className='form__users-number'>Number of users: {appStore.usersNumber}</div>
            </form>
          </div>
        </header>
      </ErrorCatcher>
    );
  }
}
