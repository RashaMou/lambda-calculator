import React from "react";

const Display = ({displayValue}) => {
  // return <input type='number' className='display'></input>;
  return <div className='display-container'>
            <span className='display'>{displayValue}</span>
        </div>
};

export default Display;
