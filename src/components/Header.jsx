import React, { Component } from 'react';

import {observer} from 'mobx-react';
import appStore from '../store/appStore.js';

export default @observer class Header extends Component{

	userSearch = (event, node) => {
		let filter = node.value.toUpperCase(); // сохраняем текущее значение поля ввода
	  let result = appStore.usersSaved.filter( item => item.name.first.toUpperCase().indexOf(filter) > -1 );
	  appStore.search(result);		
	}

	handleInputRef = (node) => {
		if(node){
			node.addEventListener('keyup', (event) => this.userSearch(event, node));
		} else {
			node.removeEventListener('keyup', this.userSearch);
		}
	}

  render(){
		return (	
			<header className="form-section">
				<div className="container">
					<form action="#" className="form">
						<input 
							type="text" 
							placeholder="Search for names" 
							className="form__input" 
							id="form__input" 
							ref={this.handleInputRef}
						/>
						<div className="form__users-number">
							Number of users: {appStore.usersNumber}
						</div>	
					</form>
				</div>
			</header>   	 
		); 	
  }
}