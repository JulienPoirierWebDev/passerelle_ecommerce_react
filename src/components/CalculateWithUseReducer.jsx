import { useReducer } from "react";
import reducer from "../reducers/bankReducer.js/reducer";
import BANKTYPES from "../reducers/bankReducer.js/actions";

function CalculateWithUseReducer() {
  const initialState = {
    total: 0,
    error: "",
    debt: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div className="m-2 p-4 bg-blue-800 text-white">
        <p>Total: {state.total}</p>
      </div>
      {state.error ? (
        <div className="m-2 p-4 bg-red-800 text-white">
          <p>{state.error}</p>
        </div>
      ) : null}

      {state.debt > 0 ? (
        <div className="m-2 p-4 bg-yellow-800 text-white">
          <p>Dette : {state.debt}</p>
        </div>
      ) : null}

      <div>
        <div>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.ADD, payload: { amount: 1 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Add 1
          </button>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.ADD, payload: { amount: 5 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Add 5
          </button>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.ADD, payload: { amount: 10 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Add 10
          </button>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.ADD, payload: { amount: 50 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Add 50
          </button>
        </div>

        <div>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.SUBSTRACT, payload: { amount: 1 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 1
          </button>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.SUBSTRACT, payload: { amount: 5 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 5
          </button>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.SUBSTRACT, payload: { amount: 10 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 10
          </button>
          <button
            onClick={() =>
              dispatch({ type: BANKTYPES.SUBSTRACT, payload: { amount: 50 } })
            }
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 50
          </button>
        </div>
      </div>

      <button
        onClick={() => dispatch({ type: BANKTYPES.RESET })}
        className="m-2 p-4 bg-black text-white"
      >
        Reset
      </button>
    </div>
  );
}

export default CalculateWithUseReducer;
