import constants from '../constants'
import { combineReducers } from 'redux'

export const headcount = (state, action) => {
    if (action.type === constants.ADD_ATTENDEE){
        return action.payload
    } else {
        return state
    }
}


export const addmovie = (state, action) => {
    if(action.type === constants.ADD_DATE) {
        return action.payload
    } else {
        return state
    }
}


export const allDates = (state=[], action) => {

    switch(action.type){
        case constants.ADD_DATE:

        return [
            ...state,
            addmovie(null, action)
        ]
        default:
        return state
    }
} 

export default combineReducers ({
    allDates,
    headcount
})