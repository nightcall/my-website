import React from 'react';
import Layout from './Layout';
import ProjectList from './ProjectList';
import Introduction from './Introduction';
import Contact from './Contact';
import AboutMe from './AboutMe';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lang: 'en'
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

	handleLangChange = (lang) => {
		console.log('ok')
		this.setState({lang: 'fr'});
	}

	render() {
		return(
			<Layout lang='frrr' handleLangChange={this.handleLangChange} >
				<Introduction />
				<ProjectList projects={this.projects} />
				<AboutMe />
				<Contact />
			</Layout>
		);
	}
}