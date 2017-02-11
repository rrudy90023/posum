import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'

import appReducer from '../store/reducers'
import constants from '../constants'
import initialState from '../data.js'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'


const store = createStore(appReducer)
console.log(store.getState())

class Rsvp extends Component {

  constructor(props){
    super(props)
    this.state ={
      data: props.data
    }
  }

addPerson(){
  store.dispatch({
    type: constants.ADD_ATTENDEE,
    payload: 1
  })
  console.log("addadd", store.getState())
}

  render(){
      
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
        <div onClick={this.addPerson } >Add Attendee</div>
      
      </div>
    )
  }
}

export default connect( (state)=> ({state: state}) )(Rsvp)