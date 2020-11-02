import React from "react";
import { useSelector, useDispatch } from "react-redux";

function DepositPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();

  function onDepositHandle() {
    dispatch({ type: "DEPOSIT", payload: 10 });
  }

  return (
    <div>
      <h1>Deposit Page</h1>
      <h1>balace : {balance}</h1>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
}

export default DepositPage;
