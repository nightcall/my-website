import React from 'react';

export default class Introduction extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id='introduction'>
				<div className='container_1024'>
					<p>
						<img src='/ellarumpf.jpg' alt='ellarumpf' />
					</p>
					<p style={{fontFamily: 'OpenSansLight'}}>
						Hi ! My name is <strong>Yassine Hermellin</strong>, I can help you develop your <strong>web application</strong>.
						<br />Whether you need to <strong>design</strong> it, build it or both.<br />
						I can also help you build a visual identity or a <strong>motion design</strong> video.
						<br />
						You can see <a href='#project-list' style={{backgroundColor: 'transparent'}} className='underline'>examples of my work</a> below.<br />
						<br />
						<a href='#contact' className='contact-link'>Contact me now</a>
					</p>
				</div>
			</div>
		);
	}
}