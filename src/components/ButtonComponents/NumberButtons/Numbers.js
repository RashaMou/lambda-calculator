import React, { useState } from "react";


//import any components needed

//Import your array data to from the provided data file
import {numbers} from './../../../data'; // by importing numbers, we are defining it as a variable for use below in numbers.map
import NumberButton from './NumberButton'; //we import the component so we can return it below

const Numbers = (props) => { // do we need to define props here to pass them to NumberButton?
  // STEP 2 - add the imported data to state
  const [numberState] = useState(numbers)
  // console.log("Numbers.js: Numbers: numberState:", numberState);

  return (
    <div>
      {numbers.map((number, index) => {
        return <NumberButton setDisplayValue={props.setDisplayValue} num={number} index={index} key={number}/> // "key" property is only for React to identify number order. Set it and forget it. 
        
      })
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
