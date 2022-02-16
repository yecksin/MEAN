import {Router, Request, Response} from 'express';
import User from '../models/user.model';

export  const usersRouter = Router();

usersRouter.get('/', async(req:Request, res:Response)=>{
    let users = await User.find()
    res.json({
        ok:true,
        message:"Todo está bien",
        users
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