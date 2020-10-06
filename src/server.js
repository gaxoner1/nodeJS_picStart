const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const logs = require('./api/logs');
const middlewares = require('./middlewares')

require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('tiny'));
app.use(cors({
  origin:'process.env.ORIGIN_URL'
}));

app.get('/', (req, res)=> {
  res.json({
    message: 'Server Side App Running :)',
  });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);



const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});
