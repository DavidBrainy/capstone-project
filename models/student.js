import { Schema, model, models } from "mongoose";

const studentSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    programme: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    hometown: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = models.Student || model("Student", studentSchema);
export default Student;
