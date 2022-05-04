import React, { useState } from "react";

console.log("react is, ", React);

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrementor = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrementor = () => {
    setCount(count - 1);
  };

  return (
    <>
      <span>Current Count: {count}</span>
      <section>
        <button onClick={handleIncrementor}>+</button>
        <button onClick={handleDecrementor}>-</button>
      </section>
    </>
  );
}
