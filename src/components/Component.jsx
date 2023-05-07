import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BuyIcecream } from "../redux/actionReducer";

const Component = () => {
  const [value, setValue] = useState(1);
  const iceNumber = useSelector(state => state.ice.numOfIce);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(BuyIcecream(value));
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <h2>Number of ice is : {iceNumber}</h2>
      <button onClick={handleClick}>Check</button>
    </div>
  );
};

export default Component;
