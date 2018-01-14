import React from 'react';

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
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
	}
}