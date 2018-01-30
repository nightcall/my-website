import React from 'react';

const translations = {
	en: {
		'navbar-home': 'Home',
		'navbar-projects': 'Projects',
		'navbar-about': 'About',
		'navbar-contact': 'Contact',

		'contact-section-title': 'Contact me',
		'contact-text': (<React.Fragment>
			You wish to contact me so you we can talk about your project ?
			You are interested in my services or want to know more ?
			<br /><br />
			Send me a message,<br /> I'll get to you as soon as possible !
		</React.Fragment>),
		'contact-placeholder-name': 'Your name',
		'contact-placeholder-email': 'Your email',
		'contact-placeholder-phone': 'Your phone',
		'contact-placeholder-message': 'Your message',
		'contact-button-send' : 'Send',
		'contact-button-sending' : 'Sending...',
		'contact-button-sent' : 'Message sent !',

		'intro-button-contact-me': 'Contact me now',
		'intro-text': (
			<React.Fragment>
				Do you need to <strong>develop a web application</strong>, <strong>design </strong>
				(<span className='underline'>a logo, website, flyer, t-shirt</span>) or produce <strong>a video/motion design</strong> ?
				<br />My name is Yassine and I can help you with your project.<br />
				<br />You can browse my <a href='#projects' style={{backgroundColor: 'transparent'}} className='underline'>last projets</a> below.<br />
				<br /><br />
			</React.Fragment>),

		'about-title': 'My services',
		'about-design-title': 'Design',
		'about-design-desc': (<p>
			User interface design, webdesign, logo design or even visual identity development.
			I provide a tailored service and adapted to your needs.
			<br /><br />Softwares and technologies used: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
			Adobe InDesign</span>
			</p>),
		'about-develop-title': 'Develop',
		'about-develop-desc': (<p>
			Web applications development client-side (Front-end) and server-side (Back-end).
			Installation of content manager systems (CMS).
			<br /><br />Softwares and technologies used: <span className='underline'>HTML5, CSS3, PHP, SQL,
			Javascript (ReactJS, Node, Express), WordPress.</span>
			</p>),
		'about-video-title': 'Direct',
		'about-video-desc': (<p>
			Design and production of video projects and motion design.
			<br /><br />Softwares and technologies used: <span className='underline'>Adobe Première, Adobe After Effects, Adobe Illustrator.</span>
			</p>),

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
				<p className='project-left'>Flyer design for Etapa Tapas, touristic discovery tapas circuit in Barcelona.<br />
				Softwares used: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3>Logo design</h3>
				<h6>The Source</h6>
				<p>Production of the logo of The Source Export Company, a company of import-export of car pieces Located in Dubaï.<br />
				Softwares used: <span className='underline'>Adobe Illustrator, Adobe Photoshop.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Motion Design</h3>
				<h6 className='project-left'>KeepYourMoneySafe.com</h6>
				<p className='project-left'>Production of a explanatory video for KeepYourMoneySafe,
				a company who sends money abroad.<br />
				Softwares used: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
				
			(<React.Fragment>
				<h3>Motion Design</h3>
				<h6>Goldize</h6>
				<p>Production of a explanatory video for AG Conseil, Barcelona.<br />
				Softwares used: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
		],
	},
	fr: {
		'navbar-home': 'Accueil',
		'navbar-projects': 'Projets',
		'navbar-about': 'A propos',
		'navbar-contact': 'Contact',

		'contact-section-title': 'Me contacter',
		'contact-text': (<React.Fragment>
			Vous voulez me contacter pour me parler de votre projet ?
			Vous êtes interéssé par mes services ou souhaitez en savoir plus ?<br />
			<br />
			Envoyez moi un message ci-contre, je vous réponds très vite !
		</React.Fragment>),
		'contact-placeholder-name': 'Votre nom',
		'contact-placeholder-email': 'Votre email',
		'contact-placeholder-phone': 'Votre téléphone',
		'contact-placeholder-message': 'Votre message',
		'contact-button-send' : 'Envoyer',
		'contact-button-sending' : 'Envoi en cours...',
		'contact-button-sent' : 'Message envoyé !',

		'intro-button-contact-me': 'Me contacter',
		'intro-text': (<React.Fragment>
				Vous avez besoin de <strong>developper une application web</strong>, de <strong>concevoir </strong>
				(<span className='underline'>Design de logo, site web, flyer, t-shirt</span>) ou de <strong>réaliser une vidéo/motion design</strong> ?
				<br />Je m'appelle Yassine Hermellin et je peux vous aider à développer votre projet.
				<br />
				<br />
				Vous pouvez consulter mes <a href='#projects' style={{backgroundColor: 'transparent'}} className='underline'>derniers projets</a> ci-dessous.<br />
				<br /><br />
			</React.Fragment>),

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
		'contact-text': (<React.Fragment>
			Quiere usted contactarme para hablar <br />de su proyecto ? Está interesado en mis servicios o desea saber más ?<br />
			<br />
			Envíame un mensaje ya, le respondo muy rápido !
		</React.Fragment>),
		'contact-placeholder-name': 'Su nombre',
		'contact-placeholder-email': 'Su email',
		'contact-placeholder-phone': 'Su teléfono',
		'contact-placeholder-message': 'Su mensaje',
		'contact-button-send' : 'Enviar',
		'contact-button-sending' : 'Enviando...',
		'contact-button-sent' : 'Mensaje enviado !',

		'intro-button-contact-me': 'Contactarme',
		'intro-text': (
			<React.Fragment>
				Necesitas <strong>desarollar una aplicación web</strong>, <strong>diseñar </strong>
				(<span className='underline'>logotipo, página web, flyer, camiseta</span>) o <strong>producir un video/motion design</strong> ? 
				Me llamo Yassine Hermellin y le puedo ayudar a desarollar su proyecto.
				<br />
				<br />
				Puede consultar mis <a href='#projects' style={{backgroundColor: 'transparent'}} className='underline'>últimos proyectos</a> más abajo.<br />
				<br /><br />
			</React.Fragment>),

		'about-title': 'Mis servicios',
		'about-design-title': 'Diseñar',
		'about-design-desc': (<p>
			Diseño de interfaz de usuario, diseño web, diseño de logotipo o realización de identidad visual.
			Mis servicios son hechos a medida y adaptados a tus necesidades.
			<br /><br />Softwares y tecnologías usadas: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
			Adobe InDesign</span>
			</p>),
		'about-develop-title': 'Desarollar',
		'about-develop-desc': (<p>
			Desarollo de web application del lado del cliente (Front-end) y del lado del servidor (Back-end)
			Instalación de sistema de gestión de contenidos (CMS).
			<br /><br />Softwares y tecnologías usadas: <span className='underline'>HTML5, CSS3, PHP, SQL,
			Javascript (ReactJS, Node, Express), WordPress.</span>
			</p>),
		'about-video-title': 'Dirigir',
		'about-video-desc': (<p>
			Diseño y producción de proyectos video y motion design.
			<br /><br />Softwares y tecnologías usadas: <span className='underline'>Adobe Première, Adobe After Effects, Adobe Illustrator.</span>
			</p>),

		'projects-title': 'Algunos proyectos',
		'project-description': [
			(<React.Fragment>
				<h3>Identidad visual</h3>
				<h6>Jeux du Golfe</h6>
				<p>Segunda edición de los Jeux du Golfe (Juegos del Golfo). Creación de un nuevo logo y una nueva identidad visual.
				Diseño del cartel y de camisetas para los participantes.<br />
				Softwares usados: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Diseño de flyer</h3>
				<h6 className='project-left'>Etapa Tapas</h6>
				<p className='project-left'>Producción de un flyer para Etapa Tapas, circuito turístico de tapas en Barcelona.<br />
				Softwares usados: <span className='underline'>Adobe Illustrator, Adobe Photoshop,
				Adobe InDesign.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3>Diseño de logotipo</h3>
				<h6>The Source</h6>
				<p>Producción del logotipo de The Source Export Company, una empresa de importación y exportación
				de piezas de automóviles ubicada en Dubaï.<br />
				Softwares usados: <span className='underline'>Adobe Illustrator, Adobe Photoshop.</span></p>
			</React.Fragment>),

			(<React.Fragment>
				<h3 className='project-left'>Motion Design</h3>
				<h6 className='project-left'>KeepYourMoneySafe.com</h6>
				<p className='project-left'>Producción de un video explicativo para KeepYourMoneySafe,
				una empresa que envía dinero en el extranjero.<br />
				Softwares usados: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
				
			(<React.Fragment>
				<h3>Motion Design</h3>
				<h6>Goldize</h6>
				<p>Producción de un video explicativo para AG Conseil, Barcelona.<br />
				Softwares usados: <span className='underline'>Adobe Première, Adobe After Effects.</span></p>
			</React.Fragment>),
		],
	}
};

export default translations;