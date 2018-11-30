import React, {Component} from 'react'
import {Consumer} from '../context'

import Spinner from './common/Spinner'
import Search from './Search'
import Dash from './Dash'

class Index extends Component {
  constructor() {
    super();
    this.state = {
      searchTitle: ''
    }
  }

  render() {
    return (
      <Consumer>
        {
          value => {
            // check whether to display search result
            let data = (value.searchResult) ? value.searchResult.data : value.deviceList.data;
            const isActiveCount = (data) ? data.filter(item => item.active === true).length : {};
            if(data) {
              return (
                <React.Fragment>
                  <Search 
                    activeDevice={isActiveCount} 
                    inactiveDevice={data.length - isActiveCount} />
                  <Dash data={data} />
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

export default Index;