import express from "express"
const router = express();

import {register, login} from "../controllers/registration.js"
import { isAuth } from "../middlewares/isAuth.js"

router.post("/register", register);
router.post("/login", login);

export default router;