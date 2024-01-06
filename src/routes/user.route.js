import { Router } from "express";
import { createUser, deleteUserById, getAllUsers, getHello, getUserByID, updateUserByID } from "../controllers/user.controller.js";


const router = Router();


router.route("/hello").get(getHello);
router.route("/create").post(createUser);
router.route("/get-all").get(getAllUsers);
router.route("/:id").get(getUserByID).put(updateUserByID).delete(deleteUserById);


export default router;