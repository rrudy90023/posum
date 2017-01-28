import React, {PropTypes, Component} from 'react'
import ReactDOM from 'react-dom'   
import { Router, Route, Link } from 'react-router'
import Data from '../data.js'

export default class AddEvent extends Component {


constructor(props){
    super(props)
    this.submit = this.submit.bind(this)
    this.state = {
        data: props.data,

    }
}




submit(e){
    e.preventDefault()
    this.props.onNewEvent({
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
}


render(){

    console.log(this.props)

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

AddEvent.defaultProps = {
    month: "March",
    day: "30",
    time: "19hrs",
    movie: "Victoria",
    location: "City Terrace",
    address: "666 Satan St."
}

AddEvent.propTypes = {
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    movie: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired

}