'use strict';

const router = require('../lib/router.js');

router.get('/', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  let name = req.query.name || '';
  res.write(`This is the month of ${name}`);
  res.end();
});

router.post('/data', (req, res) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.write(JSON.stringify(req.body));
  res.end();
});

module.exports = {};

