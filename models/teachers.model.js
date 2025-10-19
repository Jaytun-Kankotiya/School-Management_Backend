import mongoose from 'mongoose';
import { type } from 'os';

const teacherSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
      default: 0,
    },
    email: {
      type: String
    }
  },
);

const Teacher = mongoose.model('Teacher', teacherSchema);
export default Teacher;
