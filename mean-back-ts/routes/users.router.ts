import {Router, Request, Response} from 'express';

export  const usersRouter = Router();

usersRouter.get('/', (req:Request, res:Response)=>{
    console.log("hace un get")
    res.json({
        ok:true,
        message:"Todo está bien"
    })
});

usersRouter.post('/', (req:Request, res:Response)=>{
    console.log(req.body)
    res.json({
        ok:true,
        message:"Todo está bien",
        body: req.body
    })
});

export default usersRouter;