import React from 'react';
import Translation from './Translation';
import PropTypes from 'prop-types';
import { scrollToDiv } from './Utils';

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
						<img src='/photo.jpg' alt='ellarumpf' />
					</p>
					<p style={{width: '600px', fontFamily: 'OpenSansLight', fontSize: '20px'}}>
						{tr('intro-text')}
						<a href='#contact' onClick={scrollToDiv('contact')}
							className='contact-link'>{tr('intro-button-contact-me')}</a>
					</p>
				</div>
			</div>
		);
	}
}