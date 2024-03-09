import { Elysia, t } from "elysia";

export default new Elysia({ prefix: '/auth' })
  .post('login', ({ body: { email, password }, cookie: { token }, set }) => {
    if (email !== "nishant@gmail.com" || password !== "pass1234") {
      set.status = 'Unauthorized'

      return "Invalid credentials"
    }

    token.value = "booyah"
    set.status = 'OK'
    return "Successful login"
  }, {
    body: t.Object({
      email: t.String(),
      password: t.String()
    }),
    cookie: t.Cookie({
      token: t.Optional(t.String())
    })
  })
