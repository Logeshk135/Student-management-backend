import connectDB from "./connection.js";
import Student from "../models/Student.js";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const students = await Student.find();
    return res.status(200).json(students);
  }

  if (req.method === "POST") {
    const body = JSON.parse(req.body);
    const newStudent = await Student.create(body);
    return res.status(201).json(newStudent);
  }

  res.status(400).json({ message: "Invalid method" });
}
