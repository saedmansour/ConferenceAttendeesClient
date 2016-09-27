import React, { Component, PropTypes } from 'react'

export default class Attendee extends Component {
  static propTypes = {
    attendee: PropTypes.object
  }

  render() {
    // TODO: don't fetch bio (need serializer in API)
    const { name, image, title, interests, company, country } = this.props.attendee;

    return (
      <li>
        <div><img src={image} /></div>
        <div>{title} {name} @ {company}</div>
        <div>{interests}</div>
        <div>{country}</div>
      </li>
    )
  }
}
