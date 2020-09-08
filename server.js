const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();



const app = express();
app.use(morgan('tiny'));

app.use(cors({
  origin:'process.env.ORIGIN_URL'
}));

app.get('/', (req, res)=> {
  res.json({
    message: 'Server Side App Running',
  });
});

app.use((req, res, next) => {
  const error = new Error( `${req.originalUrl} - Not Found`);
  res.status(404)
  next(error);
});

//erros handler, check if 200 (valid req) means erroris somewhere so change to 500,
//else let status code be response.
//respons in json and add stack trace (for dev only)
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Stack unavailble in prod' : error.stack,
  })
});
// mongoose.connect(process.env.DATABASE_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });


const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
});
