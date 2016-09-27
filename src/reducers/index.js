import { combineReducers } from 'redux'
import { SEARCH_FEATURED_ATTENDEES, RECEIVE_FEATURED_ATTENDEES} from '../constants/ActionTypes'

const initialState = {
  isFetching: false,
  attendees: []
}

function conferenceAttendees(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FEATURED_ATTENDEES:
      return {
        isFetching: true,
        attendees: []
      };

    case RECEIVE_FEATURED_ATTENDEES:
      return {
        attendees: action.attendees,
        isFetching: false
      };

    default:
      return state
  }
}

const rootReducer = combineReducers({
  conferenceAttendees
})

export default rootReducer
