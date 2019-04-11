import React, { Component } from 'react';

export default class Users extends Component {
  state = {

  }

  render(){
    return (
			<section className="user-list-section">
				<div className="container">
					<div className="users-block" id="users-block">
						<div className="users-header">
							<table>
								<tbody>
									<tr>
										<td className="user__img-cell"></td>
										<td className="user__last">Last</td>
										<td className="user__first">First</td>
										<td className="user__username">Username</td>
										<td className="user__phone">Phone</td>
										<td className="user__location">Location</td>
									</tr>
								</tbody>
							</table>
						</div>
						<ul className="users-list" id="users-list">
							{this.props.children}
						</ul>
					</div>
				</div>
			</section>
    );
  }
}