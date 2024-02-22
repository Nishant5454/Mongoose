import express from "express"; 
const router=express.Router();  
import userController from "../controller/home.js"; 
router.get('/',userController.homepage)  
router.get('/login',userController.loginpage) 

router.get('/register',userController.regpage) 
router.post('/register',userController.UserDoc)
export default router
