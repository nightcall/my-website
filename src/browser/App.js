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

	static defaultProps = {
		lang: 'en'
	};

	constructor(props) {
		super(props);
	}

	getChildContext() {
		if(this.props.lang != 'en'
		&& this.props.lang != 'fr'
		&& this.props.lang != 'es')
			return {lang: 'en'};
		
		return {lang: this.props.lang};
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