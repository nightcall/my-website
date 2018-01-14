import React from 'react';
import Slider from 'react-slick';

export default class MySlider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return(
			<Slider {...settings}>
				{this.props.children}
			</Slider>
		);
	}
}