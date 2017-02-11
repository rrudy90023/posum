import constants from '../constants'
import { combineReducers } from 'redux'
import Data from '../data.js'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


export const totalattendance = (state=0, action) => {
    if (action.type === constants.ADD_ATTENDEE){
       console.log(state + action.payload)
        return state + action.payload

         
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


export const calendar = (state=null, action) => {
    //console.log('state',state, 'action',action)
    switch(action.type){
        case constants.ADD_DATE:
        
        return [
            ...state,action.payload
        ]
        
        default:
        return {...state}
    }
} 

export default combineReducers ({
    
    totalattendance,
    calendar,
    routing: routerReducer
})