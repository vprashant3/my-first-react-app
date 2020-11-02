import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector(state => state.loanReducer.loan);
  const loanDispatch = useDispatch();

  function onApplyLoanHandle() {
    loanDispatch({ type: "APPLY" });
  }

  return (
    <div>
      <h1>Home Page balance : {balance}</h1>
      <h1>{loan ? "Applied for loan" : "Loan Needed"}</h1>
      <button onClick={onApplyLoanHandle} disabled={loan ? true : false}>Apply for loan</button>
    </div>
  );
}

export default HomePage;
