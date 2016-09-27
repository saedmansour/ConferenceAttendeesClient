import React, { Component, PropTypes } from 'react'
import Attendee from './attendee'

export default class Attendees extends Component {
  static propTypes = {
    attendees: PropTypes.array.isRequired
  }

  render() {
    const {attendees} = this.props;
    var attendeesList = attendees.map(function(attendee) {
      return <Attendee attendee={attendee} />
    });
    return(<ul>{ attendeesList }</ul>);
  }
}
