const initialBalance = {
  balance : 0,
  loading : false
};

function reducer(state = initialBalance, action) {
  switch (action.type) {
    case "DEPOSIT":
      return { balance: state.balance + action.payload, loading : false };
    case "WITHDRAW":
      return { balance: state.balance - action.payload , loading : false};
    case "LOADING": 
      return {...state, loading : true};  
    default:
      return state;
  }
}

export default reducer;
