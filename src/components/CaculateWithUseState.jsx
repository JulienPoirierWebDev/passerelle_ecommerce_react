import { useState } from "react";

function CaculateWithUseState() {
  const [total, setTotal] = useState(0);
  const [error, setError] = useState("");
  const [debt, setDebt] = useState(0);

  const handleAdd = (amount) => {
    setError("");
    setDebt((prevDebt) => {
      const remainingDebt = prevDebt - amount;
      if (remainingDebt > 0) {
        return remainingDebt;
      } else {
        setTotal((prevTotal) => prevTotal + Math.abs(remainingDebt));
        return 0;
      }
    });
  };

  const handleSubtract = (amount) => {
    setTotal((prevTotal) => {
      const remainingTotal = prevTotal - amount;
      if (remainingTotal <= 0) {
        setError("Tu vas avoir des dettes : paiement refusé");
        setDebt((prevDebt) => prevDebt + Math.abs(remainingTotal));
        return 0;
      } else {
        return remainingTotal;
      }
    });
  };

  const handleReset = () => {
    setError("");
    setTotal(0);
    setDebt(0);
  };

  return (
    <div>
      <div className="m-2 p-4 bg-blue-800 text-white">
        <p>Total: {total}</p>
      </div>
      {error ? (
        <div className="m-2 p-4 bg-red-800 text-white">
          <p>{error}</p>
        </div>
      ) : null}

      {debt > 0 ? (
        <div className="m-2 p-4 bg-yellow-800 text-white">
          <p>Dette : {debt}</p>
        </div>
      ) : null}

      <div>
        <div>
          <button
            onClick={() => handleAdd(1)}
            className="m-2 p-4 bg-black text-white"
          >
            Add 1
          </button>
          <button
            onClick={() => handleAdd(5)}
            className="m-2 p-4 bg-black text-white"
          >
            Add 5
          </button>
          <button
            onClick={() => handleAdd(10)}
            className="m-2 p-4 bg-black text-white"
          >
            Add 10
          </button>
          <button
            onClick={() => handleAdd(50)}
            className="m-2 p-4 bg-black text-white"
          >
            Add 50
          </button>
        </div>

        <div>
          <button
            onClick={() => handleSubtract(1)}
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 1
          </button>
          <button
            onClick={() => handleSubtract(5)}
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 5
          </button>
          <button
            onClick={() => handleSubtract(10)}
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 10
          </button>
          <button
            onClick={() => handleSubtract(50)}
            className="m-2 p-4 bg-black text-white"
          >
            Subtract 50
          </button>
        </div>
      </div>

      <button onClick={handleReset} className="m-2 p-4 bg-black text-white">
        Reset
      </button>
    </div>
  );
}

export default CaculateWithUseState;
