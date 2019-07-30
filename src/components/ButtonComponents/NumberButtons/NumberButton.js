import React from "react";

// TODO: Add class to "0" button for styling. If button.char === 0, add class zero-button
// ? The div container below is added to each button. How to add div to the whole set of numbers?

const NumberButton = (props) => { // this is coming from Numbers, but how?
  console.log('NumberButton.js: NumberButton: props', props); 
  return (
    <button className={'index-'+ props.index + ' ' + 'number-buttons'}>{props.num}</button>
  );
};

//{props.num} (object.key) will give us each number button. Props is passed from Numbers, which is a parent of NumberButton. It was declared when we returned the NumberButton component: return <NumberButton num={number} key={number}/> 

export default NumberButton;

//Alternatively:
// const NumberButton = ({num}) => { // destructured props: {num} = {num:1}. Works well with very few props, otherwise use props as example above
//   // console.log('NumberButton props', props); //props.num will give us each number button
//   return (
//     <button>{num}</button> // destructured props.num
//       /* Display a button element rendering the data being passed down from the parent container on props */
    
//   );
// };