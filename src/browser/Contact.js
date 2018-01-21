import React from 'react';
import Translation from './Translation';
import PropTypes from 'prop-types';

export default class Contact extends React.Component {
	static contextTypes = {
		lang: PropTypes.string
	};

	constructor(props) {
		super(props);

		this.state = {
			formEnabled: true,
			data: {
				name: '',
				email: '',
				phone: '',
				message: ''
			},
			formSending: false,
			formSent: false
		};
	}

	setData = (event) => {
		this.setState({data: {
			...this.state.data,
			[event.target.name]: event.target.value
		}});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const isValid = {
			name: (v) => v && v.length > 0,
			email: (v) => v && v.length > 0 && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v),
			phone: (v) => /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(v),
			message: (v) => v && v.length > 10,
		};

		/* coucou ilyes ji tai pique ton code */
		let errors = {};
		for(let key in isValid) {
			if(!isValid[key](this.state.data[key]))
				errors[key] = true;
		}

		if(Object.keys(errors).length > 0) {
			console.log(errors);
			// CHANGE
			//return;
		}

		this.setState({formSending: true, formEnabled: false});

        fetch('/send', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            credentials: 'same-origin',
            body: 'form-name=contact&test=test'
        })
        .then(() => {
        	console.log('ok');
        	this.setState({formSent: true, formEnabled: false});
        });
	}

	render() {
		const { lang } = this.context;
		const tr = Translation(lang);
		const inputStyle = {width: '300px'};
		const {
			formEnabled,
			data: {
				email,
				phone,
				name,
				message
			},
			formSending,
			formSent
		} = this.state;

		return(
			<div id='contact'>
				<div className='container_1024'>
					<h1>{tr('contact-section-title')}</h1>
					<div id='contact-container'>
						<div id='contact-container-left'>
							<p>
								Do you want to know more about what I can do ?
								<br />Do you want to talk to me about your project ?
								<br /><br />
								Contact me now !<br /><br />
								<button onClick={this.handleSubmit}
									disabled={!formEnabled} >
									{formSent ? tr('contact-button-sent') : (formSending ? tr('contact-button-sending') : tr('contact-button-send'))}
								</button>
							</p>
						</div>
						<div id='contact-container-right'>
							<form style={{width: '400px'}}>
								<input style={inputStyle} value={name} type='text' name='name'
									placeholder={tr('contact-placeholder-name')} onChange={this.setData}
									disabled={!formEnabled} />
								<input style={inputStyle} value={email} type='text' name='email'
									placeholder={tr('contact-placeholder-email')} onChange={this.setData}
									disabled={!formEnabled} />
								<input style={inputStyle} value={phone} type='text' name='phone'
									placeholder={tr('contact-placeholder-phone')} onChange={this.setData}
									disabled={!formEnabled} />
								<textarea style={{height: '150px'}} value={message} name='message'
									placeholder={tr('contact-placeholder-message')} onChange={this.setData}
									disabled={!formEnabled} />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}