import React from 'react';

export default class AboutMe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id='about-me'>
				<div className='container_1024'>
					<h1>About me </h1>
					<img src='/braces.svg' alt='braces' style={{width: '200px'}}/>
				</div>
			</div>
		);
	}
}