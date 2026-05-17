var studentController = require("../apis/controllers/student.controller");
var express = require("express");
var router = express.Router();

router.post("/create", studentController.createStudent);

module.exports = router;