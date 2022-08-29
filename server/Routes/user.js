import express from "express";
import {EditUser, ShowUser, UpdateUser} from "../controller/user.js";
const router = express.Router();

router.get('/:_id/show', ShowUser);

router.get('/:_id/edit', EditUser);

router.post('/update/:_id', UpdateUser);

router.patch("/delete/:_id", )

export default router;