import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  useCounter;

  const { counter, increment } = useCounter(10);

  const [show, setShow] = useState(true);

  return (
    <>
      <h2>
        Counter: <Small value={counter} />
      </h2>
      <hr />
      <button className="btn btn-light" onClick={() => increment(1)}>
        +1
      </button>
      <button className="btn btn-light" onClick={() => setShow(!show)}>
        Show/Hide: {JSON.stringify(show)}
      </button>
    </>
  );
};
