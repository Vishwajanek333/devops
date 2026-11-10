
const express = require("express");

const app = express();

app.use(express.json());

// Temporary database
let students = [
    { id: 1, name: "Rahul", age: 21 },
    { id: 2, name: "Arun", age: 22 }
];

// ==================================
// READ: Get all students
// ==================================
app.get("/api/students", (req, res) => {
    res.status(200).json(students);
});

// ==================================
// READ: Get student by ID
// ==================================
app.get("/api/students/:id", (req, res) => {
    const student = students.find(
        (s) => s.id === Number(req.params.id)
    );

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(student);
});

// ==================================
// CREATE: Add new student
// ==================================
app.post("/api/students", (req, res) => {
    const { name, age } = req.body;

    if (!name || !Number.isInteger(age) || age <= 0) {
        return res.status(400).json({
            message: "Valid name and age are required"
        });
    }

    const newStudent = {
        id: Math.max(0, ...students.map((s) => s.id)) + 1,
        name,
        age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

// ==================================
// UPDATE: Replace student
// ==================================
app.put("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const student = students.find((s) => s.id === id); //

    if (!student) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    const { name, age } = req.body;

    if (!name || !Number.isInteger(age) || age <= 0) {
        return res.status(400).json({
            message: "Valid name and age are required"
        });
    }

    student.name = name;
    student.age = age;

    res.json(student);
});

// ==================================
// DELETE: Delete student
// ==================================
app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);

    const exists = students.some((s) => s.id === id);

    if (!exists) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    students = students.filter((s) => s.id !== id);

    res.status(204).end();
});

// ==================================
// START SERVER
// ==================================
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
