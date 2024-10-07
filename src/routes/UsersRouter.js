import express from "express";
import {
    changeEmailUsers,
    createUsers,
    deleteUsers,
    getAllUsers,
    getUsersByEmail,
    updateIdAddress,
    updateUsers
} from "../controller/Users.js";


const router = express.Router();

router.get("/users/all/:email", getAllUsers);
router.get("/users/:email", getUsersByEmail);
router.post("/users", createUsers);
router.delete("/users/:id", deleteUsers);
router.patch("/users/:id", updateUsers);
router.patch("/users/email/:uuid", changeEmailUsers);
router.patch("/users/address/:uuid", updateIdAddress);

export default router;