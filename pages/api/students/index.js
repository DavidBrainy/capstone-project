import Student from "../../../models/student";
import db from "../../../lib/dbConnect";

export default async function handler(req, res) {
  if (req.method === "GET") {
    await db.connect();

    const students = await Student.find({});
    await db.disconnect();

    res.status(200).json({ students });
  } else if (req.method === "POST") {
    await db.connect();

    const { firstName, middleName, lastName, email } = req.body;

    const student = await Student.create({
      firstName,
      middleName,
      lastName,
      email,
    });

    await db.connect();

    res.status(201).json({ student });
  } else {
    res.status(405).json({ error: "only POST and GET method are allowed" });
  }
}
