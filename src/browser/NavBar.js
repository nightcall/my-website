import React from 'react';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id='nav-bar'>
				<nav>
					<div>
						<h3><a href='/'>Home</a></h3>
						<h3><a href='#project-list'>Projects</a></h3>
						<h3><a href='#about-me'>About me</a></h3>
						<h3><a href='#contact'>Contact</a></h3>
					</div>
					<div>
						<h6><a href='#' onClick={this.props.handleLangChange} >EN</a></h6>
						<h6><a href='#'>ES</a></h6>
						<h6><a href='#'>FR</a></h6>
					</div>
				</nav>
			</div>
		);
	}
}