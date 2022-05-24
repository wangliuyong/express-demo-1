import express, { NextFunction ,Response,Request,RequestHandler} from 'express'

import log from './use/log'
const app = express()

app.use(log.logUrl())
app.use(log.logErr())

app.use('/demo',(req,res,next) => {
  res.send('deo页面')
  next()
})

app.get('/',(req,res) => {
  res.send('hello word')
})

app.route('/route').all(() => {

}).get(() => {

}).post(() => {
  
})

app.listen('3001',() => {
  console.log('http://localhost:30001');
})  