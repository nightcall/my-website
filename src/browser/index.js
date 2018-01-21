import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={App} />
			<Route path='/:lang' component={App} />
		</Switch>
	</BrowserRouter>, document.getElementById('root'));