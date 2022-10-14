import React from "react";
import { getStudents } from "../../utils/getStudents";

export async function getStaticPaths() {
  const res = await getStudents();

  const paths = res.map((student) => ({
    params: { studentId: string(student._id) },
  }));

  console.log(paths);

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  let student = {};
  try {
    student = await getStudents(context.params.studentId);
  } catch (error) {}

  return {
    props: {
      student,
    },
  };
}

const studentDetails = ({ student }) => {
  return (
    <div>
      <h1>StudentsDetails</h1>
      <h1>{student.firstName}</h1>
    </div>
  );
};

export default studentDetails;
