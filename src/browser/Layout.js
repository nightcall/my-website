import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import PropTypes from 'prop-types';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div>
				<NavBar />
				{this.props.children}
				<Footer />
			</div>
		);
	}
}