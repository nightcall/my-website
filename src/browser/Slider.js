import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			id,
			currentSlide,
			handleNextSlide,
			handlePreviousSlide
		} = this.props;

		return(
			<div className='slider'>
				<div className='slider-arrows'>
					<img className='slider-arrow' src='/arrow-left.png' alt='left' onClick={handlePreviousSlide} />
					<img className='slider-arrow' src='/arrow-right.png' alt='right'	onClick={handleNextSlide} />
				</div>
				<img src={`/img/project_${id}_${currentSlide}.png`} alt='slider' />
			</div>
		);
	}
}