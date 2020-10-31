import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1>Home Page balance : {balance}</h1>
    </div>
  );
}

export default HomePage;
