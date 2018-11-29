import React from 'react';
import spinner from './spinner.gif';

const Spinner = (props) => {
  return (
    <div>
      <img 
      src={spinner}
      alt="...loading"
      className='loading'
      style={{margin: '40px auto', height: props.imgHeight}} />
    </div>
  )
}

export default Spinner;
