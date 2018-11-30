import React, { Component } from 'react'

class Status extends Component {
  render() {
    const {activeDevice, inactiveDevice} = this.props.deviceStatus;
    return (
      <div className="device-status-info">
        <span className="title">Device Status</span>
        <span className="device-status-orientation active">{activeDevice} <i>Active</i></span>
        <span className="device-status-orientation inactive">{inactiveDevice} <i>Inactive</i></span>
      </div>
    )
  }
};

export default Status;
