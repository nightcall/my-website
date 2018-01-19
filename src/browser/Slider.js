import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='slider'>
				<div className='slider-arrows'>
					<img src='/arrow-left.png' alt='left' style={{width: '70px'}}/>
					<img src='/arrow-right.png' alt='right' style={{width: '70px'}}/>
				</div>
				<img src='/project-thumbnail.png' />
			</div>
		);
	}
}