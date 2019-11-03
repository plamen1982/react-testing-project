import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCounter = () => {
    setCount(count => count + 1);
  };
  useEffect(() => {}, [count]);
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCounter}>Count up</button>
    </>
  );
};

export default Counter;
