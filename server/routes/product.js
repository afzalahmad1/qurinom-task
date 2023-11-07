import express from "express"
const router = express();

import {product,getAllProducts} from "../controllers/product.js"
import { isAuth } from "../middlewares/isAuth.js"

router.post("/addProduct", product);
router.get("/getAll", getAllProducts);

export default router;