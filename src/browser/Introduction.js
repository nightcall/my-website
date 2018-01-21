import React from 'react';
import Translation from './Translation';
import PropTypes from 'prop-types';

export default class Introduction extends React.Component {
	static contextTypes = {
		lang: PropTypes.string
	};

	constructor(props) {
		super(props);
	}

	render() {
		const { lang } = this.context;
		const tr = Translation(lang);

		return(
			<div id='introduction'>
				<div className='container_1024'>
					<p>
						<img src='/ellarumpf.jpg' alt='ellarumpf' />
					</p>
					<p style={{fontFamily: 'OpenSansLight'}}>
						Hi ! My name is Yassine Hermellin, I can help you develop your web application.
						<br />Whether you need to design it, build it or both.<br />
						I can also help you build a visual identity or a motion design video.
						<br />
						You can see <a href='#projects' style={{backgroundColor: 'transparent'}} className='underline'>examples of my work</a> below.<br />
						<br />
						<a href='#contact' className='contact-link'>{tr('intro-button-contact-me')}</a>
					</p>
				</div>
			</div>
		);
	}
}