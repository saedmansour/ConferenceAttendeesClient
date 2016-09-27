import * as types from '../constants/ActionTypes'

export const searchFeaturedAttendees = () => ({
    type: types.SEARCH_FEATURED_ATTENDEES
  }
)

export const receiveAttendees = (json) => ({
  type: types.RECEIVE_FEATURED_ATTENDEES,
  attendees: json
})

export const featuredAttendees = () => (dispatch) => {
  dispatch(searchFeaturedAttendees());
  return fetch(`http://my_api.dev/api/v1/attendees/`)
  .then(response => response.json())
  .then(json => dispatch(receiveAttendees(json)));
}
