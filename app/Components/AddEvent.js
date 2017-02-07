import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'


import appReducer from '../store/reducers'
import constants from '../constants'
import initialState from '../data.js'
import { createStore, applyMiddleware } from 'redux'
import { connect, Provider } from 'react-redux'



const store = createStore(appReducer)


console.log(store.getState())
class AddEvent extends Component {


constructor(props){
    super(props)
    
    this.state = {
        data: props.data,
    }
    this.submit = this.submit.bind(this)
    this.addEvent = this.addEvent.bind(this)
}

addEvent(newEvent){
    store.dispatch({
        type: constants.ADD_DATE,
        payload:newEvent
    })
    
}



submit(e){
    e.preventDefault()
    
    this.addEvent({
        
        month: this.refs.month.value,
        day: this.refs.day.value,
        time: this.refs.time.value,
        movie: this.refs.movie.value,
        location: this.refs.location.value,
        address: this.refs.address.value
    })
        this.refs.month.value = ''
        this.refs.day.value = ''
        this.refs.time.value = ''
        this.refs.movie.value = ''
        this.refs.location.value = ''
        this.refs.address.value = ''

    console.log(store.getState())
}


render(){


    const { month, day, time, movie, location, address, onNewEvent } = this.props
     
    return(
       
        <form onSubmit={this.submit}>
            <label htmlFor="month">Month</label>
            <input id="month" type="text" required defaultValue={month} ref="month"/>

            <label htmlFor="day">Day</label>
            <input id="day" type="text" required defaultValue={day} ref="day"/>

            <label htmlFor="time">Time</label>
            <input id="time" type="text" required defaultValue={time} ref="time"/>

            <label htmlFor="movie">Movie</label>
            <input id="movie" type="text" required defaultValue={movie} ref="movie"/>

            <label htmlFor="location">Location</label>
            <input id="location" type="text" required defaultValue={location} ref="location"/>

            <label htmlFor="address" >Address</label>
            <input id="address" type="text" required defaultValue={address} ref="address"/>
            <button>Add Event</button>
        </form>
    )
}
}

export default connect( (state)=> ({state: state}) )(AddEvent)

AddEvent.defaultProps = {
    month: "",
    day: "",
    time: "",
    movie: "",
    location: "",
    address: ""
}

AddEvent.propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired

}