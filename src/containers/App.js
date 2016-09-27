import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Attendees from '../components/attendees'
import { featuredAttendees } from '../actions'

class App extends Component {
  static propTypes = {
    attendees: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.dispatch(featuredAttendees());
  }

  render() {
    const {attendees} = this.props;
    return (
      <div>
        <Attendees attendees={attendees} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { conferenceAttendees } = state
  const {
    isFetching,
    attendees: attendees
  } = conferenceAttendees || {
    isFetching: true,
    attendees: []
  }

  return {
    attendees,
    isFetching
  }
}

export default connect(
  mapStateToProps
)(App)
