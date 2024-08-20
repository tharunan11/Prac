const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.get("/students", studentController.getStudents);
router.get("/students/:regNumber", studentController.getStudentById);
router.post("/students", studentController.createStudent);
router.put("/students/:regNumber", studentController.updateStudent);
router.delete("/students/:regNumber", studentController.deleteStudent);

module.exports = router;
