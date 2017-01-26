import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'

export default class Rsvp extends Component {

  constructor(props){
    super(props)
    this.state ={
      data: props.data
    }
  }

  render(){
      console.log("rsvp", this.props)
    return(
      <div>
      {this.props.members.map((people, index) =>
        <ul>
          <li>
          <span key={index}>{people.name}</span>
          <span>{people.email}</span>
          </li>
        </ul>
        )}
      
      </div>
    )
  }
}