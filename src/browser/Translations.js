import React from 'react';

const translations = {
	en: {
		'navbar-home': 'Home',
		'navbar-projects': 'Projects',
		'navbar-about': 'About',
		'navbar-contact': 'Contact',

		'contact-section-title': 'Contact me',
		'contact-placeholder-name': 'Your name',
		'contact-placeholder-email': 'Your email',
		'contact-placeholder-phone': 'Your phone',
		'contact-placeholder-message': 'I\'d like to work with you',
		'contact-button-send' : 'Send',
		'contact-button-sending' : 'Sending...',
		'contact-button-sent' : 'Message sent !',

		'intro-button-contact-me': 'Contact me now',
		'intro-text': 'TODO',

		'about-title': 'My services',
		'about-design-title': 'Design',
		'about-design-desc': 'TODO',
		'about-develop-title': 'Develop',
		'about-develop-desc': 'TODO',
		'about-video-title': 'Direct',
		'about-video-desc': 'TODO',

		'projects-title': 'Some of my work',
		'project-description': [
			(<React.Fragment>
				<h3>Visual identity</h3>
				<h6>Jeux du Golfe</h6>
				<p>Second edition of the Jeux du Golfe (Games of the Gulf). Creation of a new logo and visual identity.
				Design of the poster and jerseys for the players.<br />
				Softwares used: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Flyer design</h3>
				<h6 className='project-left'>Etapa Tapas</h6>
				<p className='project-left'>TODO<br />
				Softwares used: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3>Logo design</h3>
				<h6>The Source</h6>
				<p>Making of the logo of The Source Export Company, a company of import-export of car pieces Located in Dubaï.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Motion Design</h3>
				<h6 className='project-left'>KeepYourMoneySafe.com</h6>
				<p className='project-left'>Création d'une vidéo explicative pour KeepYourMoneySafe,
				une entreprise dd'envoi d'argent à l'étranger.<br />
				Softwares utilisés: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
				
			(<React.Fragment>
				<h3>Motion Design</h3>
				<h6>Goldize</h6>
				<p>Création d'une vidéo explicative pour AG Conseil, Barcelone.<br />
				Softwares utilisés: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
		],
	},
	fr: {
		'navbar-home': 'Accueil',
		'navbar-projects': 'Projets',
		'navbar-about': 'A propos',
		'navbar-contact': 'Contact',

		'contact-section-title': 'Me contacter',
		'contact-placeholder-name': 'Votre nom',
		'contact-placeholder-email': 'Votre email',
		'contact-placeholder-phone': 'Votre téléphone',
		'contact-placeholder-message': 'Je voudrais travailler avec vous',
		'contact-button-send' : 'Envoyer',
		'contact-button-sending' : 'Envoi en cours...',
		'contact-button-sent' : 'Message envoyé !',

		'intro-button-contact-me': 'Me contacter',
		'intro-text': 'TODO',

		'about-title': 'Mes services',
		'about-design-title': 'Concevoir',
		'about-design-desc': (<p>
			Réalisation de design d'interface, webdesign, design de logotype ou encore recherche
			d'identité visuelle. Je propose un service sur mesure et adapté à votre projet.
			<br /><br />Softwares et technologies utilisées: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
			Adobe InDesign</span>
			</p>),
		'about-develop-title': 'Développer',
		'about-develop-desc': (<p>
			Developpement d'applications web coté client (Front-end) et coté serveur (Back-end).
			Installation de gestionnaire de contenus (CMS).
			<br /><br />Softwares et technologies utilisées: <span className='underline'>HTML5, CSS3, PHP, SQL,
			Javascript (ReactJS, Node, Express), WordPress.</span>
			</p>),
		'about-video-title': 'Réaliser',
		'about-video-desc': (<p>
			Conception et réalisation de projets vidéo et motion design.
			<br /><br />Softwares et technologies utilisées: <span className='underline'>Adobe Première, Adobe After Effects, Adobe Illustrator.</span>
			</p>),

		'projects-title': 'Quelques projets',
		'project-description': [
			(<React.Fragment>
				<h3>Refonte d'identité visuelle</h3>
				<h6>Jeux du Golfe</h6>
				<p>Deuxième édition des Jeux du Golfe. Création d'un nouveau logo et d'une nouvelle identité visuelle.
				Réalisation d'affiche et du design des maillots des participants.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Design de flyer</h3>
				<h6 className='project-left'>Etapa Tapas</h6>
				<p className='project-left'>Réalisation d'un flyer pour Etapa Tapas, circuit touristique de découverte de tapas à Barcelone.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3>Design de logotype</h3>
				<h6>The Source</h6>
				<p>Réalisation du logo de The Source Export Company, entreprise d'import-export
				de pièces automobiles située à Dubaï.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Motion Design</h3>
				<h6 className='project-left'>KeepYourMoneySafe.com</h6>
				<p className='project-left'>Création d'une vidéo explicative pour KeepYourMoneySafe,
				une entreprise dd'envoi d'argent à l'étranger.<br />
				Softwares utilisés: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
				
			(<React.Fragment>
				<h3>Motion Design</h3>
				<h6>Goldize</h6>
				<p>Création d'une vidéo explicative pour AG Conseil, Barcelone.<br />
				Softwares utilisés: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
		],
	},
	es: {
		'navbar-home': 'Inicio',
		'navbar-projects': 'Proyectos',
		'navbar-about': 'Acerca de mi',
		'navbar-contact': 'Contacto',

		'contact-section-title': 'Contactarme',
		'contact-placeholder-name': 'Tu nombre',
		'contact-placeholder-email': 'Tu email',
		'contact-placeholder-phone': 'Tu teléfono',
		'contact-placeholder-message': 'Me gustaría trabajar contigo',
		'contact-button-send' : 'Enviar',
		'contact-button-sending' : 'Enviando...',
		'contact-button-sent' : 'Mensaje enviado !',

		'intro-button-contact-me': 'Contactarme',
		'intro-text': 'TODO',

		'about-title': 'Mis servicios',
		'about-design-title': 'Diseñar',
		'about-design-desc': 'TODO',
		'about-develop-title': 'Desarrollar',
		'about-develop-desc': 'TODO',
		'about-video-title': 'Dirigir',
		'about-video-desc': 'TODO',

		'projects-title': 'Algunos proyectos',
		'project-description': [
			(<React.Fragment>
				<h3>Refonte d'identité visuelle</h3>
				<h6>Jeux du Golfe</h6>
				<p>Deuxième édition des Jeux du Golfe. Création d'un nouveau logo et d'une nouvelle identité visuelle.
				Réalisation d'affiche et du design des maillots des participants.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Design de flyer</h3>
				<h6 className='project-left'>Etapa Tapas</h6>
				<p className='project-left'>Réalisation d'un flyer pour Etapa Tapas, circuit touristique de découverte de tapas à Barcelone.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3>Design de logotype</h3>
				<h6>The Source</h6>
				<p>Réalisation du logo de The Source Export Company, entreprise d'import-export
				de pièces automobiles située à Dubaï.<br />
				Softwares utilisés: <span className='underline'>Adobe Illustrator, Adobe Photoshop.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Motion Design</h3>
				<h6 className='project-left'>KeepYourMoneySafe.com</h6>
				<p className='project-left'>Création d'une vidéo explicative pour KeepYourMoneySafe,
				une entreprise dd'envoi d'argent à l'étranger.<br />
				Softwares utilisés: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
				
			(<React.Fragment>
				<h3>Motion Design</h3>
				<h6>Goldize</h6>
				<p>Création d'une vidéo explicative pour AG Conseil, Barcelone.<br />
				Softwares utilisés: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
		],
	}
};

export default translations;