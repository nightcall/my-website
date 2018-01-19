import React from 'react';

export default class AboutMe extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id='about-me' style={{backgroundColor: 'white'}}>
				<div className='container_1024'>
					<h1>What can I do for you ?</h1>
					<img src='/braces.svg' alt='braces' style={{width: '200px'}}/>
					<p>
						I can help you develop your <strong>web application</strong>. I have a wide set of skills including <span className='underline'>HTML5, CSS3, Javascript (ReactJS, Express, Node)
					</span>I also have some experience using PHP and SQL (MySQL).<br />
					I am most importantly really curious, prone to learn and interested in the lastest technologies.<br /><br />
					<br />
					I am experienced in design (logo design, webdesign).
					<br /><br />
					I am also good at motion design </p>
				</div>{/*

				DONNER DES EXEMPLES CONCRETS 
				application web, identité visuelle, 
				etc

			*/}
			</div>
		);
	}
}