import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
    adapter: MongoDBAdapter(clientPromise),
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
    ],
    jwt: {
      encryption: true
    },
    secret: "secret token",
    callbacks: {
        async jwt(token, account) {
          if (account ?.accessToken) {
            token.accessToken = account.accessToken
          }
          return token;
        },
        redirect: async (url, _baseUrl)=>{
          if (url === '/user') {
            return Promise.resolve('/')
          }
          return  Promise.resolve('/')
        }
    }
  });