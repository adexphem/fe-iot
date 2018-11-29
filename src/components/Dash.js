import React, { Component } from 'react'
import {Consumer} from '../context'
import Spinner from './common/Spinner'
import Item from './common/device/Item'

export default class Dash extends Component {
  render() {
    return (
      <Consumer>
        {
          value => {
            const { data } = value.deviceList || [];
            console.log("value ", data);
            if(data) {
              return (
                <React.Fragment>
                  <div className="device-listing row">
                  {data.map((item, key) => (
                    <Item item={item} key={key}/>
                  ))}
                  </div>
                </React.Fragment>
              )
            } else {
              return <Spinner imgHeight="100px" />;
            }
          }
        }
      </Consumer>
    )
  }
}
