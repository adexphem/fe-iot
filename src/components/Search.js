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

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  getSearchResult = (dispatch, e) => {
    e.preventDefault();

    dispatch({
      type: 'SEARCH_DATA',
      payload: this.state.searchTitle,
    });
  };

  render() {
    const {activeDevice, inactiveDevice} = this.props;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
           return(
             <React.Fragment>
               <div className="section search">
                <p className="lead text-center title">Filter Device List</p>
                <form onSubmit={this.getSearchResult.bind(this, dispatch)}>
                  <div className="form-group form-display-control">
                    <input type="text"
                      ref={this.searchTextRef}
                      className="form-control form-control-lg form-input"
                      placeholder="Search devices by name.."
                      name="searchTitle"
                      value={this.state.searchTitle}
                      onChange={this.onChange}/>
                      <button className="btn btn-secondary btn-lg btn-block mb-5" type="submit">
                        Submit
                      </button>
                  </div>
                </form>
              </div>
              <div className="device-status-info">
                <span className="title">Device Status</span>
                <span className="device-status-orientation active">{activeDevice} <i>Active</i></span>
                <span className="device-status-orientation inactive">{inactiveDevice} <i>Inactive</i></span>
              </div>
             </React.Fragment>
           );
        }}
      </Consumer>
    )
  }
}

export default Search;
