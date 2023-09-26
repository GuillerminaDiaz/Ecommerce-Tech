import { Router } from "express";

const userRouter = Router();

userRouter.get('/users', /* getAllUsers */);
userRouter.get('/users/:id', /*getOneUser */);

export default userRouter;
