
import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
  
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div id='notification' style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notifications
  }
}

const ConnectedNotifications = connect(mapStateToProps )(Notification)
export default ConnectedNotifications