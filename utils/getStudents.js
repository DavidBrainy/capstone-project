import axios from "axios";

export const getStudents = async (id) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/students`
  );

  const students = await res.data.students;

  if (id) {
    const student = students.find((student) => student._id === id);
    if (!student) return null;
    return student;
  }

  return students;
};
