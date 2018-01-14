import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PropTypes from 'prop-types';

export default class Layout extends React.Component {
	static childContextTypes = {
		lang: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return {
			lang: this.props.lang
		};
	}

	render() {
		return(
			<div>
				<NavBar {...this.props} />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}