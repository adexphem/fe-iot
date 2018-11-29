import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../context';

class Search extends Component {
  searchTextRef = React.createRef();

  constructor() {
    super();
    this.state = {
      searchTitle: ''
    }
  }

  onChange = (e) => {
    console.log("dddd", this);
    event.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getTrack = (dispatch, e) => {
    e.preventDefault();

    axios.get(`${process.env.DEVICE_API_HOST + ':' + process.env.DEVICE_API_PORT}/device`)
      .then(result => {
        dispatch({
          type: 'SEARCH_DEVICE',
          payload: result.data
        });

        this.setState({ trackTitle: ''});
      })
      .catch(error => console.log("Error ", error))
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
           return(
             <div className="section search">
              <p className="lead text-center title">Filter Device List</p>
              <form onSubmit={this.getTrack.bind(this, dispatch)}>
                <div className="form-group">
                  <input type="text"
                    ref={this.searchTextRef}
                    className="form-control form-control-lg form-input"
                    placeholder="Search devices by name.."
                    name="searchTitle"
                    value={this.state.searchTitle}
                    onChange={this.onChange}/>
                </div>
              </form>
             </div>
           );
        }}
      </Consumer>
    )
  }
}

export default Search;
