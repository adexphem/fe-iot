import React, { Component } from 'react'
import Spinner from './common/Spinner'
import Item from './common/device/Item'

class Dash extends Component {
  render() {
    const {data} = this.props;

    if(data && data.length) {
      return (
        <React.Fragment>
          <div className="device-listing row">
          {data.map((item, key) => (
            <Item item={item} 
              key={key} />
          ))}
          </div>
        </React.Fragment>
      )
    } else if(data.length < 1) {
      return (<div>No data found.</div>);
    } else {
      return <Spinner imgHeight="100px" />;
    }
  }
}

export default Dash;
