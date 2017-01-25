import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link } from 'react-router'

export default class Header extends Component {

	constructor(props) {
		super(props)
	}

	render(){		
		return (
			<div className='header'>
				Posum Kino
			</div>
		);
	}
}