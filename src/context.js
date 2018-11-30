import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH_DATA':
      return {
        ...state,
        searchedTerm: action.payload,
        searchResult: {
          data: [...state.deviceList.data].filter(item => {
          if (action.payload !== "") {
            return(item.name.includes(action.payload));
          } else {
            return [...state.deviceList.data];
          }
        })},
      };

    case 'GET_DEVICE_READING':
      return {
        ...state,
        deviceList: action.payload,
        activeDeviceCode: [],
        activeDevice: 0,
        inactiveDevice: 0
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      deviceList: {},
      dispatch: action => this.setState(state => reducer(state, action)),
      activeDevice: 0,
      inactiveDevice: 0
    }
  };

  componentDidMount = () => {
    axios.get(`${process.env.DEVICE_API_HOST + ':' + process.env.DEVICE_API_PORT}/device`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        let {data} = res.data;
        let activeDeviceInfo = [];

        data.forEach(item => {
          if(item.active) activeDeviceInfo.push(item.name);
        });

        this.setState({
          deviceList: res.data,
          activeDevice: activeDeviceInfo.length,
          inactiveDevice: data.length - activeDeviceInfo.length,
          activeDeviceCode: [...activeDeviceInfo]
        });
      })
      .catch()
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;

