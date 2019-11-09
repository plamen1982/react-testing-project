import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';

const HooksWithEnzymeAndJestCounter = ({ onCountChange = () => {} }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    onCountChange(count);
  }, [count]);
  return (
    <div>
      <Typography>Count: {count}</Typography>
      <Button
        variant="contained"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </Button>
    </div>
  );
};

export default HooksWithEnzymeAndJestCounter;
