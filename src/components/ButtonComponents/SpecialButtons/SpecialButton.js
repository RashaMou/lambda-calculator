import React from "react";

const SpecialButton = (props) => { 
  return (
    <button onClick={() => props.setDisplayValue(props.special)} className='special-buttons'>{props.special}</button>  
  );
};

export default SpecialButton;
