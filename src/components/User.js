import React, { Component } from 'react';
import cx from 'classnames';
import { object } from 'prop-types';
import ErrorCatcher from './ErrorCatcher';
import female from '../img/female.svg';
import male from '../img/male.svg';

export default class User extends Component {
  static propTypes = {
    data: object.isRequired,
  };

  state = {
    hideDetails: true,
  };

  handleClick = () => this.setState({ hideDetails: !this.state.hideDetails });

  /* функция для конвертирования даты в формат MM/DD/YYYY */
  getDate = date => {
    const currentdate = new Date(date);
    const month = currentdate.getMonth() + 1;
    const day = currentdate.getDate();
    const year = currentdate.getFullYear();
    return `${month} / ${day} / ${year}`;
  };

  render() {
    const { data } = this.props;
    const userHeaderClasses = cx('user__header', { active: !this.state.hideDetails });
    const userDetailsClasses = cx('user__details', { active: !this.state.hideDetails });

    return (
      <ErrorCatcher>
        <li className='user'>
          <div className={userHeaderClasses} onClick={this.handleClick}>
            <table>
              <tbody>
                <tr>
                  <td className='user__img-cell'>
                    <div className='user__img-wrapper'>
                      <img src={data.picture.medium} className='user__img' alt='photo' />
                    </div>
                  </td>
                  <td className='user__last'>{data.name.last}</td>
                  <td className='user__first'>{data.name.first}</td>
                  <td className='user__username'>{data.login.username}</td>
                  <td className='user__phone'>{data.phone}</td>
                  <td className='user__location'>{data.location.state}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={userDetailsClasses}>
            <div className='name'>
              <h2>{data.name.first}</h2>
              <img src={data.gender === 'female' ? female : male} alt='' />
            </div>
            <div className='user__details-wrapper'>
              <div className='user__details-block'>
                <p>
                  <span>Username</span> {data.login.username}
                </p>
                <p>
                  <span>Registered</span> {this.getDate(data.registered.date)}
                </p>
                <p>
                  <span>Email</span> {data.email}
                </p>
              </div>
              <div className='user__details-block'>
                <p>
                  <span>Address</span> {data.location.street}
                </p>
                <p>
                  <span>City</span> {data.location.city}
                </p>
                <p>
                  <span>Zip Code</span> {data.location.postcode}
                </p>
              </div>
              <div className='user__details-block'>
                <p>
                  <span>Birthday</span> {this.getDate(data.dob.date)}
                </p>
                <p>
                  <span>Phone</span> {data.phone}
                </p>
                <p>
                  <span>Cell</span> {data.cell}
                </p>
              </div>
              <div className='user__details-block'>
                <img src={data.picture.large} alt='' />
              </div>
            </div>
          </div>
        </li>
      </ErrorCatcher>
    );
  }
}
