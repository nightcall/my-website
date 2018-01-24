import React from 'react';
import Animated from 'animated/lib/targets/react-dom';

export default class Slider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0,
			marginLeft: new Animated.Value(0)
		};
	}

	next = () => {
		this.setState(prevState => {
			const numSlides = 3;
			if(prevState.currentSlide > numSlides - 2)
				return {currentSlide: 0};
			else
				return {currentSlide: prevState.currentSlide + 1};
		},
		() => Animated.timing(this.state.marginLeft, {toValue: -480 * this.state.currentSlide}).start())
	}

	previous = () => {
		this.setState(prevState => {
			const numSlides = 3;
			if(prevState.currentSlide - 1 < 0)
				return {currentSlide: numSlides - 1};
			else
				return {currentSlide: prevState.currentSlide - 1};
		},
		() => Animated.timing(this.state.marginLeft, {toValue: -480 * this.state.currentSlide}).start())
	}

	render() {
		return(
			<div className='slider'>
				<div className='slider-arrows'>
					<img className='slider-arrow' src='/arrow-left.png' alt='left' onClick={this.previous} />
					<img className='slider-arrow' src='/arrow-right.png' alt='right'	onClick={this.next} />
				</div>
				<Animated.div className='flex-row' style={{position: 'absolute', left: this.state.marginLeft}}>
					{[0, 1, 2].map(i => <img src={`/img/project_${this.props.src}_${i}.jpg`} alt={i} key={i} />)}
				</Animated.div>
			</div>
		);
	}
}

/*
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
				<img src={`/img/project_${id}_${currentSlide}.jpg`} alt='slider' />
			</div>
		);
	}
}
*/