

import "babel-polyfill"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
import "./Assets/style.scss"
import App from './App.js'


ReactDOM.render(
 
		<Router>
			<Route path="/" component={App}/>
		</Router>, document.getElementById('app')

)




