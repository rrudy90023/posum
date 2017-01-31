import constants from '../constants'

export const headcount = (state, action) => {
    if (action.type === constants.ADD_ATTENDEE){
        return action.payload
    } else {
        return state
    }
}


export const addmovie = (datestate, dateaction) => {
    if(dateaction.type === constants.ADD_DATE) {
        return dateaction.payload
    } else {
        return datestate
    }


}