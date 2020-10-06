const notFound = (req, res, next) => {
  const error = new Error( `${req.originalUrl} ------> Not Found`);
  res.status(404)
  next(error);
};

//error handler, check if 200 (valid req) means error is somewhere so change to 500,
//else let status code be response.
//respons in json and add stack trace (for dev only)
const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? 'Stack unavailble in prod' : error.stack,
  })
};

module.exports = {
  notFound,
  errorHandler
}
