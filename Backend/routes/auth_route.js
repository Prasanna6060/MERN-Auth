import  express  from "express";
import { get_router } from "../controllers/auth_controller";

const router = express.Router();
 
router.get('/', get_router)

export default  authrouter;

