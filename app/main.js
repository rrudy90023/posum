import "babel-polyfill"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
import "./Assets/style.scss"
import Calendar from './Components/Calendar'
import Rsvp from './Components/Rsvp'
import About from './Components/About'
import App from './App.js'
import Notfound from './Components/Notfound'


ReactDOM.render(
 
		<Router>
			<Route path="/" component={App}/>
			<Route path="calendar" component={App} />
			<Route path="rsvp" component={App} />
			<Route path="about" component={App} />
			<Route path="*" component={Notfound} />
		</Router>, document.getElementById('app')

)




