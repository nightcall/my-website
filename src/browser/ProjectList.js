import React from 'react';
import Slider from './Slider';

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<Slider>
				<div><h3>1</h3></div>
				<div><h3>2</h3></div>
				<div><h3>3</h3></div>
				<div><h3>4</h3></div>
			</Slider>
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