import { useState } from "react";
import { button, row } from "./styles.css";

type Props = {
  start?: number;
};

export default function Counter({ start = 0 }: Props) {
  const [counter, setCounter] = useState(start);
  return (
    <div className={row}>
      <button className={button} onClick={() => setCounter((c) => c - 1)}>
        -
      </button>
      <span>{counter}</span>
      <button className={button} onClick={() => setCounter((c) => c + 1)}>
        +
      </button>
    </div>
  );
}
