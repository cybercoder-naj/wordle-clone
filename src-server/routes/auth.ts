import { Elysia, t } from "elysia";
import { userAuthModel } from "@models/auth";
import authMiddleware from "@middlewares/auth";

export default new Elysia({ prefix: '/auth' })
  .use(userAuthModel)
  // .schema({
  //   cookie: t.Object({
  //     token: t.Optional(t.String())
  //   })
  // })
  .post('login', ({ body: { email, password }, cookie: { token }, set }) => {
    if (email !== "nishant@gmail.com" || password !== "pass1234") {
      set.status = 'Unauthorized'

      return "Invalid credentials"
    }

    token.value = "booyah"
    set.status = 'OK'
    return "Successful login"
  }, {
    body: 'user.auth',
    cookie: t.Object({
      token: t.Optional(t.String())
    })
  })
  .use(authMiddleware)
  .post('logout', ({ user, cookie: { token }, set }) => {
    if (!user) {
      set.status = 'Unauthorized'
      return "Unauthorized"
    }
    token.value = ""
    return "Successful logout"
  }, {})
