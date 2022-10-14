import db from "../../../lib/dbConnect";
import User from "../../../models/user";
import bcrypt from "bcryptjs";

async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Only POST method is allowed" });
    return;
  }

  const { firstName,middleName, lastName, email, password, role } = req.body;

  await db.connect();

  let emailExists = await User.findOne({ email });

  await db.disconnect();

  if (emailExists) {
    res.status(409).json({ error: "email already in used" });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    firstName,
    middleName,
    lastName,
    email,
    password: hashedPassword,
    role,
  });

  res.status(201).json({ user });
}

export default handler;
