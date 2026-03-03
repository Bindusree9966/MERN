import React from "react";
import Conditional from "../components/Conditional";
import Form from "../hooks/Form";
import State from "../hooks/State";
import Parent from "../components/Parent";
import User from "../components/User";

const Home = () => {
  return (
    <div>
      <Conditional />
      <Form />
      <State />
      <Parent />
      <User
        name="xyz"
        age={19}
        skills={["HTML", "CSS", "JS", "Java"]}
      />
    </div>
  );
};

export default Home;