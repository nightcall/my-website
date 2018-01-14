import React from 'react';

export default class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	handleSubmit = () => {
        fetch('/post', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'post',
            credentials: 'same-origin',
            body: 'test'
        })
        .then(() => console.log('ok'))
	}

	render() {
		const { lang } = this.context;

		return(
			<div id='contact'>
				<div className='container_1024'>
					<form>
						<input type='text' name='email' placeholder='Your email' />
						<input type='text' name='phone' placeholder='Your phone' />
						<input type='text' name='name' placeholder='Your name' />
						<textarea name='message' placeholder='Your message' />
						<input type='button' onClick={this.handleSubmit} value='submit' />
					</form>
				</div>
			</div>
		);
	}
}