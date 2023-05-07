import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BuyCake } from "../redux/actionReducer";

const CakeCompoent = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(BuyCake());
  };
  const cakeNumber = useSelector(state => state.cake.numOfCakes);
  console.log("hello", cakeNumber);

  return (
    <div>
      <h2>Number of cakes is : {cakeNumber}</h2>
      <button onClick={handleClick}>Check</button>
    </div>
  );
};

export default CakeCompoent;
