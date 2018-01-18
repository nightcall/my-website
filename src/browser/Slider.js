import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='slider'>
				<div className='slider-arrows'>
					<img src='/arrow-left.png' alt='left' />
					<img src='/arrow-right.png' alt='right' />
				</div>
				<img src='/project-thumbnail.png' />
			</div>
		);
	}
}