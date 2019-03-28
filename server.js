const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const path = require('path');

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return app.render(req, res, '/', req.query)
  })

  //Handles 404 error
  server.get('*', (req, res) => {
    console.log('Request URL:', req.originalUrl);
    console.log('Request Type:', req.method);
    return handle(req, res)
  })
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})