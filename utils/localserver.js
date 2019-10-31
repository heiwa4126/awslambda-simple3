#!/usr/bin/env node
'use strict'
const app = require('../app')
const port = '8080';
app.app.listen(port, () => {
  console.log(`app start listening on port ${port}`)
})
