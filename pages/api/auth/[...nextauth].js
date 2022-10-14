import NextAuth from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "../../../lib/dbConnect";
import User from "../../../models/user";

export default NextAuth({
  providers: [
    credentialsProvider({
      type: "credentials",
      async authorize(credentials) {
        //connect to database
        await db.connect();

        //find user
        const user = await User.findOne({
          email: credentials.email,
        });

        //disconnect database
        await db.disconnect();

        //check for user's password
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          console.log(user);
          return {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
          };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  jwt: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      if (user?.firstName) token.firstName = user.firstName;
      if (user?.lastName) token.lastName = user.lastName;
      if (user?.role) token.role = user.role;

      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.firstName) session.firstName = token.firstName;
      if (token?.lastName) session.lastName = token.lastName;
      return session;
    },
  },
});
