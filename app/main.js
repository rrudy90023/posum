import "babel-polyfill"

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Link, IndexRoute, Redirect } from 'react-router'
import "./Assets/style.scss"
import Calendar from './Components/Calendar'
import Rsvp from './Components/Rsvp'
import About from './Components/About'
import App from './App.js'
import Notfound from './Components/Notfound'
import constants from './constants'
//import {totalattendance, members} from './data'
// import {headcount} from './store/reducers'
// import {addmovie} from './store/reducers'
// import {allDates} from './store/reducers'
import appReducer from './store/reducers'

import initialState from './data.js'
import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'redux'



const store = createStore(appReducer, initialState)

console.log('initial state', store.getState())

store.dispatch({
	type: constants.ADD_DATE,
	payload: {
		"month": "Jan",
        "day": "2",
        "time": "20hrs",
        "movie": "Green Room",
        "location": "Pecan",
        "address": ""
	}
})

console.log('next state', store.getState())
// const state = 0
// const action = {
// 	type: constants.ADD_ATTENDEE,
// 	payload: 15
// }

// const nextState = headcount(state, action)


// //////////

// const datestate = null
// const dateaction = {
// 	type: constants.ADD_DATE,
// 	payload: {
// 		    "month": "June",
// 			"day": "6",
// 			"time": "19hrs",
// 			"movie": "Victoria",
// 			"location": "City Terrace",
// 			"address": "666 Satan St."
// 	}

// }

// const movieState = addmovie(datestate, dateaction)
// console.log(`
// 			initial: ${datestate}
// 			=================
// 			action: ${JSON.stringify(dateaction)}
// 			=================
// 			new state ${JSON.stringify(movieState)}
// `)


// console.log(`
// 			initial: ${state}
// 			=================
// 			action: ${JSON.stringify(action)}
// 			=================
// 			new state ${nextState}
// `)

// let state = initialState

// console.log(`
// 	Initial State
// 	================
// 	headcount: ${state.totalattendance}
// 	================
// 	alldates: ${JSON.stringify(state.calendar)}

// `)



// state = appReducer(state, {
// 	type: constants.ADD_DATE,
// 	payload: {
// 		"month": "Jan",
//         "day": "11",
//         "time": "20hrs",
//         "movie": "Manhattan",
//         "location": "Talpa",
//         "address": ""
// 	}
// })

// state = appReducer(state, {
// 	type: constants.ADD_ATTENDEE,
// 	payload: 89
// })
// //const nextState = allDates(state, action)

// console.log(`
// 	Next State
// 	================
// 	headcount: ${state.totalattendance}
// 	================
// 	alldates: ${JSON.stringify(state.calendar)}

// `)


		


ReactDOM.render(
 
		<Router>
			<Route path="/" component={App}/>
			<Route path="calendar" component={App} />
			<Route path="rsvp" component={App} />
			<Route path="about" component={App} />
			<Route path="addevent" component={App} />
			<Route path="*" component={Notfound} />
		</Router>, document.getElementById('app')

)




