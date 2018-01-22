import React from 'react';
import Translation from './Translation';
import PropTypes from 'prop-types';

export default class AboutMe extends React.Component {
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
			<div id='about'>
				<div className='container_1024'>
					<h1>{tr('about-title')}</h1>

					<div className='about-row'>
						<div className='about-col'>
							<h3>{tr('about-design-title')}</h3>
							<img src='/design.svg' alt='design' />
							{/*<p>
							<span className='underline'>Conception de logotype, d'identité visuelle et
							webdesign</span><br /><br />Nous convenons d'abord ensemble d'un cahier des charges qui permettra d'établir les objectifs
							finaux du design du projet. <br /><br />Je me charge ensuite de réaliser ces objectifs tout en faisant attention de suivre
							les impératifs ergonomiques (Expérience utilisateur) et visuels (Respect de la chartre graphique, prise en compte du public ciblé) fixés
							précèdemmment.<br /><br />
							Technologies et softwares utilisés: <span className='underline'>Adobe Première, Illustrator, InDesign</span></p>
						*/}
						{tr('about-design-desc')}</div>
						<div className='about-col'>
							<h3>{tr('about-develop-title')}</h3>
							<img src='/develop.svg' alt='design' />
							{tr('about-develop-desc')}
						</div>
						<div className='about-col'>
							<h3>{tr('about-video-title')}</h3>
							<img src='/video.svg' alt='design' />
							{tr('about-video-desc')}
						</div>
					</div>
					{/*<img src='/braces.svg' alt='braces' style={{width: '200px'}}/>
					<p>
						I can help you develop your <strong>web application</strong>. I have a wide set of skills including <span className='underline'>HTML5, CSS3, Javascript (ReactJS, Express, Node)
					</span>I also have some experience using PHP and SQL (MySQL).<br />
					I am most importantly really curious, prone to learn and interested in the lastest technologies.<br /><br />
					<br />
					I am experienced in design (logo design, webdesign).
					<br /><br />
					I am also good at motion design </p>*/}
				</div>{/*

				DONNER DES EXEMPLES CONCRETS 
				application web, identité visuelle, 
				etc

			*/}
			</div>
		);
	}
}