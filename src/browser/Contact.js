import React from 'react';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			formEnabled: true,
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
		const inputStyle = {width: '200px'};

		return(
			<div id='contact'>
				<div className='container_1024'>
					<h1>Contact me</h1>
					<div id='contact-container'>
						<div id='contact-container-left'>
							<p>
								Do you want to know more about what I can do ?
								<br />Do you want to talk to me about your project ?
								<br /><br />
								Contact me now !<br /><br />
								<button>Send</button>
							</p>
						</div>
						<div id='contact-container-right'>
							<form style={{width: '400px'}}>
								<input style={inputStyle} value={this.state.data.name} type='text' name='name' placeholder='John Doe' onChange={this.setData}/>
								<input style={inputStyle} value={this.state.data.email} type='text' name='email' placeholder='john@doe.net' onChange={this.setData}/>
								<input style={inputStyle} value={this.state.data.phone} type='text' name='phone' placeholder='00XX XXX XXX XXX' onChange={this.setData}/>
								<textarea style={{height: '150px'}} value={this.state.data.message} name='message' placeholder={`I'd like to work with you`} onChange={this.setData}/>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}