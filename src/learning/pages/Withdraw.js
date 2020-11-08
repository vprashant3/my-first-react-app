import React from "react";
import { useSelector, useDispatch } from "react-redux";

function WithdrawPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();

  function onWithdrawHandle() {
    dispatch({ type: "WITHDRAW", payload: 10 });
  }

  return (
    <div>
      <h1>Withdraw Page</h1>
      <h1>balace : {balance}</h1>
      <button onClick={onWithdrawHandle}>Withdraw</button>
    </div>
  );
}

export default WithdrawPage;
