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
						<h3><a href='#'>Accueil</a></h3>
						<h3><a href='#'>Projets</a></h3>
						<h3><a href='#'>A propos</a></h3>
					</div>
					<div>
						<h3><a href='#'>EN</a></h3>
						<h3><a href='#'>ES</a></h3>
						<h3><a href='#'>FR</a></h3>
					</div>
				</nav>
			</div>
		);
	}
}