let students = [];

const getStudents = (req, res) => {
  res.json(students);
};

const getStudentById = (req, res) => {
  const student = students.find((s) => s.regNumber === req.params.regNumber);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

const createStudent = (req, res) => {
  const newStudent = {
    name: req.body.name,
    regNumber: req.body.regNumber,
    dept: req.body.dept,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
};

const updateStudent = (req, res) => {
  const student = students.find((s) => s.regNumber === req.params.regNumber);
  if (student) {
    student.name = req.body.name;
    student.dept = req.body.dept;
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
};

const deleteStudent = (req, res) => {
  students = students.filter((s) => s.regNumber !== req.params.regNumber);
  res.status(204).end();
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
