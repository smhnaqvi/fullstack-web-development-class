var studentController = require("../apis/controllers/student.controller");
var express = require("express");
var router = express.Router();

router.post("/student", studentController.createStudent);
router.get("/students", studentController.getAllStudents);
router.get("/student/:id", studentController.getStudentById);
router.put("/student/:id", studentController.updateStudent);
router.delete("/student/:id", studentController.deleteStudent);

module.exports = router;