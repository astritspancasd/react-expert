const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const rfs = require("rotating-file-stream");
const dotenv = require('dotenv');
const routes = require('./routes');

const app = express();

const prodStream = rfs.createStream('prod-log.txt', {
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  compress: 'gzip', // compress rotated files
});

const devStream = rfs.createStream('dev-log.txt', {
  size: '10M', // rotate every 10 MegaBytes written
  interval: '1d', // rotate daily
  compress: 'gzip', // compress rotated files
});

app.use(express.json());
app.use(
  logger('prod', {
    stream: prodStream,
  }),
);
app.use(
  logger('dev', {
    stream: devStream,
  }),
);
app.use(cors());
app.use(routes);
dotenv.config()

const port = process.env.PORT || 8000;

app.use('/heart-beat', (req, res, next) => {
  res.status(200).json({ message: 'Server up and running' });
});

app.use((req, res, next) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((error, req, res, next) => {
  res.status(error.code).json(error.message);
});

app.listen(port, () => console.log(`Server running in port: ${port}`));
