const studentModel = require("../models/student.model");

const createStudent = async (req, res) => {
    var student = new studentModel(req.body);
    await student.save().then(() => {
        res.send(student);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const getAllStudents = async (req, res) => {
    await studentModel.find().then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const getStudentById = async (req, res) => {
    await studentModel.findById(req.params.id).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const updateStudent = async (req, res) => {
    await studentModel.findByIdAndUpdate(req.params.id, req.body).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const deleteStudent = async (req, res) => {
    await studentModel.findByIdAndDelete(req.params.id).then((result) => {
        res.send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

module.exports = {
    createStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
}