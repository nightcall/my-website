import React from 'react';
import PropTypes from 'prop-types';
import Translation from './Translation';

export default class NavBar extends React.Component {
	static contextTypes = {
		lang: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { lang } = this.context;
		const tr = Translation(lang);

		return(
			<div id='nav-bar'>
				<nav>
					<div>
						<h3><a href='/'>{tr('navbar-home')}</a></h3>
						<h3><a href='#projects'>{tr('navbar-projects')}</a></h3>
						<h3><a href='#about'>{tr('navbar-about')}</a></h3>
						<h3><a href='#contact'>{tr('navbar-contact')}</a></h3>
					</div>
					<div>
						<h6><a href='/' className={lang == 'en' ? 'selectedLang' : ''} onClick={this.props.handleLangChange} >EN</a></h6>
						<h6><a href='/es/' className={lang == 'es' ? 'selectedLang' : ''}>ES</a></h6>
						<h6><a href='/fr/' className={lang == 'fr' ? 'selectedLang' : ''}>FR</a></h6>
					</div>
				</nav>
			</div>
		);
	}
}