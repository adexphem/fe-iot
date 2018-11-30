import React, { Component } from 'react'
import Moment from 'react-moment'
import {Consumer} from './../../../context'
import axios from 'axios'

import device_status from '../../../assets/images/device_status.png'

class Item extends Component {
  constructor() {
    super();
    this.state = {
      isToggleClicked: false,
      loading: true
    };

    this.toggleDeviceStatus = this.toggleDeviceStatus.bind(this);
  }

  toggleDeviceStatus = ({dispatch, item, value}) => {
    if(item.active) {
      value.activeDeviceCode.filter(code => code.name != item.name);
    } else {
      value.activeDeviceCode.push(item.name);
    }

    this.setState({
      activeDeviceCode: value.activeDeviceCode
    });

    axios.patch(`${process.env.DEVICE_API_HOST + ':' + process.env.DEVICE_API_PORT}/device/${item.name}?active=${!item.active}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if(res.status == 200){
          this.setState({loading: false, toggleState: !item.active})
        } else {
          this.setState({loading: false, toggleState: item.active})
        }
      })
      .catch(error => {});
  }

  render() {
    const { item } = this.props;

    return (
      <Consumer>
        {
          value => {
            const { dispatch } = value;

            // check whether to display search result
            let data = (value.searchResult) ? value.searchResult.data : value.deviceList.data;
            const isActiveCount = (data) ? data.filter(item => item.active === true).length : {};
            if(data) {
              return (
                <React.Fragment>
                  <div className="col-md-6 transform5">
                    <div className="card mb-4">
                      <div className="card-body transform-5">
                        <div className='content'>
                          <div className="main-cta">
                            <span className="value">{item.value}</span>
                            <span className="unit">{item.unit}</span>
                          </div>
                          <div className="name">
                            <span className="tag">Name</span>
                            <span className="content">{item.name}</span>
                          </div>
                          <div className="name">
                            <span className="tag">Date</span>
                            <span className="content date"><Moment format="MMM Do YYYY">{item.timestamp}</Moment></span>
                          </div>
                          <div onClick={() => this.toggleDeviceStatus({dispatch,item,value})
                            } className={item.active ? "status active"
                             : "status inactive"}>
                             <i><img src={device_status} /></i>
                             </div>
                        </div>
                      </div>
                    </div>
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
};

export default Item;
