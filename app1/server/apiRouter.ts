import type { NextApiRequest, NextApiResponse } from 'next';

const express = require('express');
const router = express.Router();

let counter = 0; // Initialize the counter state on the server-side

router.get('/counter', (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ counter });
});

router.post('/counter', (req: NextApiRequest, res: NextApiResponse) => {
  counter += 1;
  res.status(200).json({ counter });
});

router.put('/counter', (req: NextApiRequest, res: NextApiResponse) => {
  counter -= 1;
  res.status(200).json({ counter });
});

router.delete('/counter', (req: NextApiRequest, res: NextApiResponse) => {
  counter = 0;
  res.status(200).json({ counter });
});

export default router;
