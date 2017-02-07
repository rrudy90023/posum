import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'
import Data from '../data.js'

import appReducer from '../store/reducers'
import constants from '../constants'
import initialState from '../data.js'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import AddEvent from './AddEvent'

const store = createStore(appReducer)

store.subscribe(() => console.log(store.getState()))
class Calendar extends Component {

  constructor(props){
    super(props)
    this.state = {
        data: props.data
    }
  }

  render(){  

    return(
      <Provider store={store}>
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
      </Provider>
    )
  }
}

export default connect((state)=> ({state: state}) )(Calendar)