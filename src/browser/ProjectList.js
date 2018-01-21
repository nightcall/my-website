import React from 'react';
import Project from './Project';

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div id='projects'>
				<div className='container_1024'>
					<h1>Some of my work</h1>
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