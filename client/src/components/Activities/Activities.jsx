import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Activities extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Activities</h1>
        <ul>
          {this.props.activities?.map(activity => <li key={activity.id}><Link to={`/activities/${activity.id}`}>{activity.name}</Link></li>)}
        </ul>
      </div>
    )
  }
}

export default Activities