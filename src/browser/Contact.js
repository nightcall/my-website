import React from 'react';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				name: '',
				email: '',
				phone: '',
				message: ''
			}
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
			return;
		}

        fetch('/send', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            credentials: 'same-origin',
            body: 'form-name=contact&test=test'
        })
        .then(() => console.log('ok'));
	}

	render() {
		return(
			<div id='contact'>
				<div className='container_1024'>
					<h1>Contact me</h1>
					<div>
						<div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus congue erat id consequat. Ut aliquet diam ut nibh dapibus gravida.
							</p>
						</div>
						<form onSubmit={this.handleSubmit} >
							<input value={this.state.data.email} type='text' name='email' placeholder='Your email' onChange={this.setData}/>
							<input value={this.state.data.phone} type='text' name='phone' placeholder='Your phone' onChange={this.setData}/>
							<input value={this.state.data.name} type='text' name='name' placeholder='Your name' onChange={this.setData}/>
							<textarea value={this.state.data.message} name='message' placeholder='Your message' onChange={this.setData}/>
							<button type='submit'>Send</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}