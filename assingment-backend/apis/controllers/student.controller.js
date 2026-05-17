var studentModel = require("../models/student.model");

var createStudent = async (req, res) => {
    var student = new studentModel(req.body);
    await student.save();
    res.send(student);
}

module.exports = {
    createStudent
}