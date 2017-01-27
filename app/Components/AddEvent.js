import React, {PropTypes} from 'react'

import Data from '../data.js'


export const AddEvent = ({ month, day, time, movie, location, address, onNewEvent  }) => {

let _month, _day, _time, _movie, _location, _address

// constructor(props){
//     super(props)
//     this.submit = this.submit.bind(this)
//     this.state = {
//         data: props.data,

//     }
// }

const submit = (e) => {
    e.preventDefault()
    onNewEvent({
        month: _month.value,
        day: _day.value,
        time: _time.value,
        movie: _movie.value,
        location: _location.value,
        address: _address.value
    })
        _month.value = ''
        _day.value = ''
        _time.value = ''
        _movie.value = ''
        _location.value = ''
        _address.value = ''
}



    return(
        <form onSubmit={submit}>
            <label htmlFor="month">Month</label>
            <input id="month" type="text" required defaultValue={month} ref={input => _month = input}/>

            <label htmlFor="day">Day</label>
            <input id="day" type="text" required defaultValue={day} ref={input => _day = input}/>

            <label htmlFor="time">Time</label>
            <input id="time" type="text" required defaultValue={time} ref={input => _time = input}/>

            <label htmlFor="movie">Movie</label>
            <input id="movie" type="text" required defaultValue={movie} ref={input => _movie = input}/>

            <label htmlFor="location">Location</label>
            <input id="location" type="text" required defaultValue={location} ref={input => _location = input}/>

            <label htmlFor="address" >Address</label>
            <input id="address" type="text" required defaultValue={address} ref={input => _address = input}/>
            <button>Add Event</button>
        </form>
    )
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