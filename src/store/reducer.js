const initialBalance = {
  balance: 0,
};

function reducer(state = initialBalance, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload };
    case "WITHDRAW":
      return { balance: state.balance - action.payload };
    default:
      return state;
  }
}

export default reducer;
