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
						Hi ! My name is <strong>Yassine Hermellin</strong>, I can help you <strong>develop your web application</strong>.
						<br />Whether you need to <strong>design it</strong>, <strong>build it</strong> or both.<br />
						I can also help you build a <strong>visual identity</strong> or a <strong>motion design</strong> video.
						<br />
						You can see <a href='#project-list' style={{backgroundColor: 'transparent'}} className='underline'>examples of my work</a> below.<br />
						<br />
						<a href='#contact' style={{fontSize: '40px'}}>Contact me now !</a>
					</p>
				</div>
			</div>
		);
	}
}