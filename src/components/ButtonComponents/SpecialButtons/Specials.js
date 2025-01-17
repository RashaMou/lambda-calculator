import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import {specials} from './../../../data';
import SpecialButton from './SpecialButton';

const Specials = (props) => {  
  // STEP 2 - add the imported data to state
  const [specialState] = useState(specials); 
  return (
    <div>
      {specials.map(special => {
        // console.log('Specials.js: Specials: special', special)
        return (
          <SpecialButton setDisplayValue={props.setDisplayValue} special={special} key={special}/>
        )
      })

      }
    </div>
  );
};

export default Specials;