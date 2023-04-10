import express = require('express');
import { createUser, getAllUsers } from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/user', getAllUsers);
userRouter.post('/user', createUser);

export default userRouter;
