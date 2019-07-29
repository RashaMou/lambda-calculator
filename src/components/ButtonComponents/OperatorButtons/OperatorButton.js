import React from "react";

const OperatorButton = (props) => {
  // console.log('OperatorButton.js: OperatorButton: props', props); 

  return (
    <button class='operator-buttons'>{props.operator}</button>
  );
};

export default OperatorButton;
