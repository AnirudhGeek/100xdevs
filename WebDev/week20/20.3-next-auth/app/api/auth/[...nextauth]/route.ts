import NextAuth from "next-auth";
import Atlassian from "next-auth/providers/atlassian";
import Credentials from "next-auth/providers/credentials";
import Discord from "next-auth/providers/discord";
import Facebook from "next-auth/providers/facebook";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Credentials({
      name: "username",
      credentials: {
        username: {
          label: "Username : ",
          placeholder: "johndoe",
          type: "text",
        },
        password: { label: "Password : ", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;

        //chechking the user from database logic with correct username and password logic

        const user = {
          id: "1",
          name: "anirudh",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
    Google({
        clientId :"asdf",
        clientSecret:"asdf"
    }),
    Github({
        clientId : "abcd",
        clientSecret :"abcd"
    }),
    
  ],
});

export { handler as GET, handler as POST };
