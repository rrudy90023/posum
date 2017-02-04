import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'
import Data from '../data.js'


import { connect } from 'react-redux'

class Calendar extends Component {

  constructor(props){
    super(props)
    this.state = {
        data: props.data
    }
  }

  render(){  
    console.log()
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

export default connect((state)=> ({state: state}) )(Calendar)