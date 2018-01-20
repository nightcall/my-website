import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className='slider'>
				<div className='slider-arrows'>
					<img src='/arrow-left.svg' alt='left' style={{width: '50px', marginLeft: '15px'}}/>
					<img src='/arrow-right.svg' alt='right' style={{width: '50px', marginRight: '15px'}}/>
				</div>
				<img src={this.props.src} />
			</div>
		);
	}
}