import React, { Component } from 'react';
import female from '../img/female.svg';
import male from '../img/male.svg';

export default class User extends Component {
  state = {
  	closeDetails: true
  }

	handleClick = () => this.setState(
		{closeDetails: !this.state.closeDetails}
	);

  /* функция для конвертирования даты в формат MM/DD/YYYY */
  getDate = (date) => {
    let currentdate = new Date(date);
    let month = currentdate.getMonth() + 1;
    let day = currentdate.getDate();
    let year = currentdate.getFullYear();
    return month + "/" + day + "/" + year;
  }

  render(){
  	let {data} = this.props;

    return (
			<li className="user">
				<div 
					className={"user__header" + (!this.state.closeDetails ? ' active' : '')}
					onClick={this.handleClick}
				>
					<table>
						<tbody>
							<tr>
								<td className="user__img-cell">
									<div className="user__img-wrapper">
										<img src={data.picture.medium} className="user__img" alt="photo" />
									</div>
								</td>
								<td className="user__last">{data.name.last}</td>
								<td className="user__first">{data.name.first}</td>
								<td className="user__username">{data.login.username}</td>
								<td className="user__phone">{data.phone}</td>
								<td className="user__location">{data.location.state}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div 
					className={"user__details" + (!this.state.closeDetails ? ' active' : '')}>
					<div className="name">
						<h2>
							{data.name.first}
						</h2>
						<img src={data.gender === "female" ? female : male} alt="" />
					</div>
					<div className="user__details-wrapper">
						<div className="user__details-block">
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
						<div className="user__details-block">
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
						<div className="user__details-block">
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
						<div className="user__details-block">
							<img src={data.picture.large} alt="" />
						</div>
					</div>
				</div>
			</li>
    );
  }
}