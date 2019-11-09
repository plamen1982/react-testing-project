import React, { useState, useEffect } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Paper,
  Box
} from '@material-ui/core';
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCounterUp = () => {
    setCount(count => count + 1);
  };
  const handleCounterDown = () => {
    setCount(count => count - 1);
  };
  useEffect(() => {}, [count]);
  return (
    <Card>
      <Paper style={{ textAlign: 'center' }}>
        <Typography>
          <Box id="count-result" color="text.primary" fontSize={25}>
            {count}
          </Box>
        </Typography>
      </Paper>
      <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
        <label htmlFor="count-up">{count}</label>
        <Button
          id="count-up"
          variant="outlined"
          color="primary"
          onClick={handleCounterUp}
        >
          Count up
        </Button>
        <Button
          id="count-down"
          variant="outlined"
          color="secondary"
          onClick={handleCounterDown}
        >
          Count down
        </Button>
      </CardContent>
    </Card>
  );
};

export default Counter;
