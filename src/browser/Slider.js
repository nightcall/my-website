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
					<img src='/arrow-left.svg' alt='left' style={{width: '50px', marginLeft: '15px'}}
						onClick={handlePreviousSlide} />
					<img src='/arrow-right.svg' alt='right' style={{width: '50px', marginRight: '15px'}}
						onClick={handleNextSlide} />
				</div>
				<img src={`/img/project_${id}_${currentSlide}.png`} alt='slider' />
			</div>
		);
	}
}