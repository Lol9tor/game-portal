const express = require('express');

const router = express.Router();

router.get('/games/', async (req, res, next) => {
  res.json({result: 'ok'})
})

module.exports = router;
