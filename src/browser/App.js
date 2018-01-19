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

		this.state = {
			currentProject: -1,
			showProject: true
		};

		this.projects = [
			{
				id: 0,
				title: 'Project 0',
				description: 'This is projct 1 blabla bla'
			},
			{
				id: 1,
				title: 'Project 1',
				description: 'This is projct 2 blabla bla'
			},
			{
				id: 2,
				title: 'Project 2',
				description: 'This is projct 3 blabla bla'
			}
		];
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