import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "./../action/depositAction"

function DepositPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const loading  = useSelector((state) => state.balanceReducer.loading);

  function onDepositHandle() {
    dispatch(balanceActions.depositAsync());
  }

  return (
    <div>
      {
        loading ? <h1>updating</h1> : <h1>Deposit Page</h1>

      }
      <h1>balace : {balance}</h1>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
}

export default DepositPage;
