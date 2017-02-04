import constants from '../constants'
import { combineReducers } from 'redux'
import Data from '../data.js'

export const totalattendance = (state=0, action) => {
    if (action.type === constants.ADD_ATTENDEE){
        return action.payload
    } else {
        return state
    }
}


// export const addmovie = (state=[], action) => {
//     if(action.type === constants.ADD_DATE) {
//         //console.log(action.payload)
//         return {...state, }
//     } else {
//         //console.log(state)
//         return state
//     }
// }


export const calendar = (state=[], action) => {

    switch(action.type){
        case constants.ADD_DATE:
        
        return {
            ...action.state
        }
        
        default:
        return state
    }
} 

export default combineReducers ({
    
    totalattendance,
    calendar
})