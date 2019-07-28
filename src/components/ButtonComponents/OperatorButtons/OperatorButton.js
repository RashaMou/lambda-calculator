import React from "react";

const OperatorButton = (props) => {
  console.log('OperatorButton.js: OperatorButton: props', props); 

  return (
    <button {...props.operator} /> // spread operator because object contains more than one property
  );
};

export default OperatorButton;
