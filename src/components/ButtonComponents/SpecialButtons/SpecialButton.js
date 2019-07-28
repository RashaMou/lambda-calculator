import React from "react";

const SpecialButton = (props) => { // props comes from specials
  return (
    <button {...props.special} />
  );
};

export default SpecialButton;
