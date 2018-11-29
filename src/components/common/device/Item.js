import React from 'react';
import Moment from 'react-moment';

const Item = (props) => {
  const { item } = props;
  console.log("track  ", item);
  return (
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
              <span className="tag">On</span>
              <span className="content date"><Moment format="MMM Do YYYY">{item.timestamp}</Moment></span>
            </div>
            <div className='status'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
