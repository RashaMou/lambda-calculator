import React, { useState } from "react";

//import any components needed
//Import your array data to from the provided data file
import {operators} from './../../../data';
import OperatorButton from './OperatorButton';


const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div>
      {operators.map(operator => {
        return <OperatorButton operator={operator} key={operator} />
      })}
    </div>
  );
};

export default Operators;

