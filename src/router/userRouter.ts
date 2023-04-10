import express = require('express');
import { createUser, getAllUsers } from '../controller/userController';

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.post('/', createUser);

export default userRouter;
