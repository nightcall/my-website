import React from 'react';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0
		};
	}

	nextSlide = () => {
		const { numSlides } = this.props;
		this.setState(prevState => {
			if(prevState.currentSlide > numSlides - 2)
				return {currentSlide: 0};
			else
				return {currentSlide: prevState.currentSlide + 1};
		});
	}

	previousSlide = () => {
		const { numSlides } = this.props;
		this.setState(prevState => {
			if(prevState.currentSlide - 1 < 0)
				return {currentSlide: numSlides - 1};
			else
				return {currentSlide: prevState.currentSlide - 1};
		});
	}

	render() {
		const {
			numSlides,
			src
		} = this.props;
		return(
			<div className='slider'>
				<div className='slider-arrows'>
					<img src='/arrow-left.svg' alt='left' style={{width: '50px', marginLeft: '15px'}}
						onClick={this.previousSlide} />
					<img src='/arrow-right.svg' alt='right' style={{width: '50px', marginRight: '15px'}}
						onClick={this.nextSlide} />
				</div>
				<img src={`/${src}_${this.state.currentSlide}.png`} alt='slider' />
			</div>
		);
	}
}