import React from 'react';
import Slider from './Slider';

export default class ProjectList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {

		return(
			<div id='projects'>
				<div className='container_1024'>
					<h1>Some of my work</h1>
					<div className='project'>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus congue erat id consequat. Ut aliquet diam ut nibh dapibus gravida. Praesent lacinia gravida lacus ut dapibus. Maecenas id tortor nisi. In convallis, lectus sit amet convallis fermentum, lacus odio rhoncus justo, et faucibus diam mauris nec nibh. Suspendisse vel mauris ut</p>
						<Slider src={0} numSlides={2} />
					</div>
					<div className='project'>
						<Slider src={0} numSlides={2} />
						<p style={{textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus congue erat id consequat. Ut aliquet diam ut nibh dapibus gravida. Praesent lacinia gravida lacus ut dapibus. Maecenas id tortor nisi. In convallis, lectus sit amet convallis fermentum, lacus odio rhoncus justo, et faucibus diam mauris nec nibh. Suspendisse vel mauris ut</p>
					</div>
					<div className='project'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus congue erat id consequat. Ut aliquet diam ut nibh dapibus gravida. Praesent lacinia gravida lacus ut dapibus. Maecenas id tortor nisi. In convallis, lectus sit amet convallis fermentum, lacus odio rhoncus justo, et faucibus diam mauris nec nibh. Suspendisse vel mauris ut</p>
						<Slider src={0} numSlides={2} />
					</div>
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