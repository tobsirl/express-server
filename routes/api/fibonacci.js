import express from 'express';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  let fibnum = 20;
  let resFibNum;

  resFibNum = fibonacci(fibnum);
  console.log(`${fibnum}th Fibonacci number is: ${resFibNum}`);
  res.json({ msg: `${fibnum}th Fibonacci number is: ${resFibNum}` });

  // function for calculating fibonacci number recursively
  function fibonacci(n) {
    if (n < 2) return 1;
    else return fibonacci(n - 2) + fibonacci(n - 1);
  }
});

export default router;
