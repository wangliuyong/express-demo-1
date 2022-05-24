import { NextFunction ,Response,Request} from 'express'

export default {
  logUrl(){
    return (req:Request,res:Response,next:NextFunction) => {
      console.log(111,req.path);
      next()
    }
  },
  logErr(){
    return (req:Request,res:Response,next:NextFunction) => {
      if(req.path === '/' && req.method === 'post'){
        res.send('这里是首页')
      }

      if(req.path === '/root'){
        res.send('这里根目录')
      }
      next()
    }
  }
}