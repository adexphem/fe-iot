import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch(action.type){
    case 'GET_DEVICE_READING':
      return {
        ...state,
        deviceList: action.payload,
        heading: 'Search Result'
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      deviceList: [],
      dispatch: action => this.setState(state => reducer(state, action))
    }
  }

  componentDidMount() {
    axios.get(`${process.env.DEVICE_API_HOST + ':' + process.env.DEVICE_API_PORT}/device`)
      .then(res => {
        this.setState({
          deviceList: res.data
        });
      })
      .catch(error => console.log("Error ", error))
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

