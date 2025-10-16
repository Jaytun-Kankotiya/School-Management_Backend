const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: String,
    marks: { type: Number, default: 0 },
    attendance: { type: Number, default: 0 },
    grade: { type: String, required: true },
  },
  { timestamps: true }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = { Student };
