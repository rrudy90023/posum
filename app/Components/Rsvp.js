import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'

export default class Rsvp extends Component {

  constructor(props){
    super(props)
  }

  render(){
      console.log("rsvp", this.state.data[0].members)
    return(
      <div>Rsvp</div>
    )
  }
}