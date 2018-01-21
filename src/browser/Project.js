import React from 'react';
import Translation from './Translation';
import Slider from './Slider';

export default class Project extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentSlide: 0
		};
	}

	handleNextSlide = () => {
		const { numSlides } = this.props;
		this.setState(prevState => {
			if(prevState.currentSlide > numSlides - 2)
				return {currentSlide: 0};
			else
				return {currentSlide: prevState.currentSlide + 1};
		});
	}

	handlePreviousSlide = () => {
		const { numSlides } = this.props;
		this.setState(prevState => {
			if(prevState.currentSlide - 1 < 0)
				return {currentSlide: numSlides - 1};
			else
				return {currentSlide: prevState.currentSlide - 1};
		});
	}

	render() {
		const lang = 'en'; /* TODOOO */
		const tr = Translation(lang);
		const { id } = this.props;
		const { currentSlide } = this.state;

		const desc = <p>{tr('project-description')[id][currentSlide]}</p>;
		const content = this.props.video ? <iframe src="https://player.vimeo.com/video/107622035?title=0&byline=0&portrait=0" width="500" height="300" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> : (
			<Slider id={id} currentSlide={currentSlide}
				handleNextSlide={this.handleNextSlide}
				handlePreviousSlide={this.handlePreviousSlide} />
		);

		return(
			<div className='project'>
				{id % 2 ? desc : null}
				{content}
				{id % 2 ? null : desc}
			</div>
		);
	}
}