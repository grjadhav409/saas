"use client";

import React, { useState } from "react";

const useStateEg = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <br />
      <button onClick={increment}>Increase</button>
      <br />
      <button onClick={decrement}>Decrease</button>
    </div>
  );
};

export default useStateEg;
