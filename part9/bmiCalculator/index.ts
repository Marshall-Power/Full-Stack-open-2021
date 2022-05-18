import express = require('express');
const app = express();

import bmiRouter from './routes/bmi';

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.use('/bmi', bmiRouter);


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});