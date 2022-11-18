import express from "express";
import { getAll , login  ,  register } from "../controllers/user.js";
import auth from "../middleware/auth.js";

const router=express.Router()

router.get("/",getAll)
router.post("/login",login)
router.post("/register",register)

export default router