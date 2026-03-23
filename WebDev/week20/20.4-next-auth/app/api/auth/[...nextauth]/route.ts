import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

export const handlers = NextAuth({
  providers: [
    Credentials({
      name: "username",
      credentials: {
        username: { label: "Username", placeholder: "johndoe", type: "text" },
        password: { label: "Password", placeholder: "12345", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        //verify from DB

        const user = {
            name:"anirudh",
            email:"anirudh@gmail.com"
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    Google({
      clientId: "asd",
      clientSecret: "asd",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handlers as GET, handlers as POST };
