import React, { useState } from "react";

//import any components needed
//Import your array data to from the provided data file
import {operators} from './../../../data';
import OperatorButton from './OperatorButton';


const Operators = () => {
  // STEP 2 - add the imported data to state
  // const [operatorState, setOperatorState] = useState(operators); 
  return (
    <div>
      {operators.map(operator => {
        // console.log('Operators.js: Operator: operator.char', operator.char)
        return <OperatorButton operator={operator.char} key={operator.char} />
      })}
    </div>
  );
};

export default Operators;

