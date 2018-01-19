import React from 'react';
import Layout from './Layout';
import ProjectList from './ProjectList';
import Introduction from './Introduction';
import Contact from './Contact';
import AboutMe from './AboutMe';
import PropTypes from 'prop-types';

export default class App extends React.Component {
	static childContextTypes = {
		lang: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return {lang: 'en'};
	}

	render() {
		return(
			<Layout>
				<Introduction />
				<AboutMe />
				<ProjectList projects={this.projects} />
				<Contact />
			</Layout>
		);
	}
}