import constants from '../constants'

export const headcount = (state, action) => {
    if (action.type === constants.ADD_ATTENDEE){
        return action.payload
    } else {
        return state
    }
}