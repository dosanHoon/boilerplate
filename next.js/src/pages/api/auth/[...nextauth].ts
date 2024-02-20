//next auth 사용 시 예제

// "use client";

// import type { AuthOptions } from "next-auth";
// import NextAuth from "next-auth";


// export const authOptions: AuthOptions = {
//   session: {
//     strategy: "jwt",
//   },
//   jwt: {
//     maxAge: 60 * 60 * 24 * 7, // 1 week
//   },
//   cookies: {},
//   secret: ,
//   pages: {
//     signIn: "/signin",
//   },
//   callbacks: {
//     async jwt(data) {
//       return { ...data.token };
//     },
//     async session(param) {
//       const { session, token, user } = param;
//       return {
//         ...session,
//         idToken: token.id_token,
//         user: { ...session.user, ...user },
//       };
//     },
//   },

//   providers: [
//     {
//       id: "example",
//       name: "example",
//       type: "oauth",
//       version: "2.0",
//       profile(profile) {
//         return {
//           ...profile,
//           id: profile.sub.split("@")[0],
//           name: profile.display_name,
//         };
//       },
//       clientId: example,
//       clientSecret: example,
//       authorization: {
//         url: example,
//         params: {
//           response_type: "code",
//           client_id: example,
//           scope: "example",
//           redirect_uri: `${BASE_URI}/api/auth/callback/example`,
//         },
//       },
//       idToken: true,
//       token: {
//         url: TOKEN_URI,
//         async request(context) {
//           const params = new URLSearchParams();
//           params.append("grant_type", "authorization_code");
//           params.append("redirect_uri", `${BASE_URI}/api/auth/callback`);
//           params.append("client_id", !);
//           params.append("client_secret", !);
//           params.append("code", context.params.code || "");

//           const response = await fetch(TOKEN_URI!, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/x-www-form-urlencoded",
//             },
//             body: params,
//           });

//           const json = await response.json();

//           return {
//             tokens: json,
//           };
//         },
//       },
//       userinfo: {
//         url: USERINFO_URI,
//         params: {
//           schema: "openid",
//         },
//         async request(context) {
//           try {
//             const response = await fetch(USERINFO_URI!, {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${context.tokens.access_token}`,
//               },
//             });
//             const json = await response.json();
//             return json;
//           } catch (e) {
//             return false;
//           }
//         },
//       },

//     },
//   ],
// };

// const handler = NextAuth(authOptions);
// export default handler;
// export { handler as GET, handler as POST, handler as PUT };
