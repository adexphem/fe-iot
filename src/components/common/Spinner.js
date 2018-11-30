import React from 'react';
import spinner from './spinner.gif';

const Spinner = (props) => {
  return (
    <div className='spinner'>
      <img 
      src={spinner}
      alt="...loading"
      className='loading'
      style={{margin: '40px auto', height: props.imgHeight}} />
      <div className='info'>...loading data</div>
    </div>
  )
}

export default Spinner;
