import React, { useContext } from "react";
import Child from "./Child"; 
import { userContext } from "../App";

const Parent = () => {
  const {name}=useContext(userContext)
  const getData = (data) => {
    console.log("Received from child:", data);
    alert("Received from child: " + data);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <h1>Name:{name}</h1>
      <Child send={getData} />
    </div>
  );
};

export default Parent;