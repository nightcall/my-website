import React from 'react';
import PropTypes from 'prop-types';
import Translation from './Translation';
import { Link } from 'react-router-dom';

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
						<h3><a href={`/${lang === 'en' ? '' : lang}`}>{tr('navbar-home')}</a></h3>
						<h3><a href='#about'>{tr('navbar-about')}</a></h3>
						<h3><a href='#projects'>{tr('navbar-projects')}</a></h3>
						<h3><a href='#contact'>{tr('navbar-contact')}</a></h3>
					</div>
					<div>
						<h6><Link to='/' className={lang == 'en' ? 'selectedLang' : ''} onClick={this.props.handleLangChange} >EN</Link></h6>
						<h6><Link to='/es' className={lang == 'es' ? 'selectedLang' : ''}>ES</Link></h6>
						<h6><Link to='/fr' className={lang == 'fr' ? 'selectedLang' : ''}>FR</Link></h6>
					</div>
				</nav>
			</div>
		);
	}
}