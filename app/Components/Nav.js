import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'

export default class Nav extends Component {

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
      
        <ul>
          <li><a href="#/">Home</a></li>
          <li><a href="#/calendar">Calendar</a></li>
          <li><a href="#/rsvp">Rsvp</a></li>
          <li><a href="#/about">About</a></li>
        </ul>
      
      </div>
    )
  }
}