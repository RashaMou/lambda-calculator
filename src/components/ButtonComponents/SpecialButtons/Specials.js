import React, { useState } from "react";

//import any components needed

//Import your array data to from the provided data file
import {specials} from './../../../data';
import SpecialButton from './SpecialButton';

const Specials = () => {  
  // STEP 2 - add the imported data to state
  return (
    <div>
      {specials.map(special => {
        return (
          <SpecialButton special={special} key={special}/>
        )
      })

      }
    </div>
  );
};

export default Specials;