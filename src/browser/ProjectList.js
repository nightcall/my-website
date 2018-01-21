import React from 'react';
import Project from './Project';
import Translation from './Translation';
import PropTypes from 'prop-types';

export default class ProjectList extends React.Component {
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
			<div id='projects'>
				<div className='container_1024'>
					<h1>{tr('projects-title')}</h1>
					<Project id={0} key={0} numSlides={3} />
					<Project id={1} key={1} numSlides={3} />
					<Project id={2} key={2} numSlides={0} video='http://vimeo.com?v=25eZthx4' />
				</div>
			</div>
		);
		/*
		return(
			<div id='project-list'>
				{this.props.projects.map(p => {
					return(
						<p key={p.id} >
							{p.id}<br />
							{p.title}<br />
							{p.description}<br />
						</p>
					);
				})}
			</div>
		);
		*/
	}
}