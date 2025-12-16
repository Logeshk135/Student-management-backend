import express from "express";
import { getAll, getStudents, createStudent, updateOne, deleteOne } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getAll);
router.get("/api/students", getStudents);
router.post("/", createStudent);
router.patch("/:id", updateOne);
router.delete("/:id", deleteOne);


export default router;
