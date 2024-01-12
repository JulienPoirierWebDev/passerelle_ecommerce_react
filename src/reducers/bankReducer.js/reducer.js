import BANKTYPES from "./actions";

const reducer = (state, action) => {
  const amount = action.payload?.amount || 0;
  const total = state.total;
  const debt = state.debt;
  const type = action.type;

  switch (type) {
    case BANKTYPES.ADD:
      if (debt > 0) {
        if (amount > debt) {
          const reste = amount - debt;
          return { ...state, debt: 0, error: "", total: reste };
        }

        return { ...state, debt: debt - amount };
      }
      return { ...state, total: total + amount };

    case BANKTYPES.SUBSTRACT:
      if (amount > total) {
        const reste = amount - total;
        return {
          ...state,
          total: 0,
          debt: debt + reste,
          error: "Tu vas avoir des dettes",
        };
      }

      return { ...state, total: total - amount };

    case BANKTYPES.RESET:
      return { ...state, total: 0, error: "", debt: 0 };
    default:
      break;
  }
};

export default reducer;
