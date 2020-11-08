const loanState = {
  loan: false,
};

function loanReducer(state = loanState, action) {
  switch (action.type) {
    case "APPLY":
      return { loan: true };
    default:
      return loanState;
  }
}

export default loanReducer;
