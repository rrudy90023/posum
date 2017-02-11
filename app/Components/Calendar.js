import React, {Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link, IndexRoute, Redirect, browserHistory, useRouterHistory, hashHistory } from 'react-router'
import Data from '../data.js'

import appReducer from '../store/reducers'
import constants from '../constants'
import initialState from '../data.js'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'
import AddEvent from './AddEvent'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const store = createStore(appReducer)

store.subscribe(() => console.log(routerReducer))
class Calendar extends Component {

  constructor(props){
    super(props)
    this.state = {
        data: props.data
    }
  }

  render(){  
    console.log(store.getState())
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