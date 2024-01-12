const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      if (state.debt > 0) {
        if (action.payload.amount > state.debt) {
          const reste = action.payload.amount - state.debt;
          return { ...state, debt: 0, error: "", total: reste };
        }

        return { ...state, debt: state.debt - action.payload.amount };
      }
      return { ...state, total: state.total + action.payload.amount };

    case "substract":
      if (action.payload.amount > state.total) {
        const reste = action.payload.amount - state.total;
        return {
          ...state,
          total: 0,
          debt: state.debt + reste,
          error: "Tu vas avoir des dettes",
        };
      }

      return { ...state, total: state.total - action.payload.amount };

    case "reset":
      return { ...state, total: 0, error: "", debt: 0 };
    default:
      break;
  }
};

export default reducer;
