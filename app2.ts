import express, { NextFunction ,Response,Request} from 'express'
import type { ErrorRequestHandler, RequestHandler } from "express";
const createError = require('http-errors');

import log from './use/log'
const app = express()

app.use(log.logUrl())
app.use(log.logErr())

app.use('/demo',(req,res,next) => {
  console.log('demo');
  res.send('deo页面')
  next()
})
app.use('/error',(req,res,next) => {
  next('未登录')
})

app.get('/',(req,res) => {
  console.log('hello');
  res.send('hello word')
})

app.route('/route').all((req,res) => {
  res.send('end')
}).get(() => {

}).post(() => {

})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// } as RequestHandler);
 
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render(err);
  res.send(err)
} as ErrorRequestHandler);

app.listen('3001',() => {
  console.log('http://localhost:30001');
})  