import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'
import Data from '../data.js'

export default class Calendar extends Component {

  constructor(props){
    super(props)
    this.state = {
        data: props.data
    }
  }

  render(){  
    console.log("calendar", this.props)
    return(
      <div>
      {this.props.calendar.map((days, index) => 
        <ul>
          <li>
          <span key={index}>{days.location}</span>
          <span>{days.movie}</span>
          <span>{days.time}</span>
          </li>
        </ul>
        )}
      </div>
    )
  }
}