import { Elysia, t } from "elysia";

export const userAuthModel = new Elysia()
  .model({
    'user.auth': t.Object({
      email: t.String({
        format: 'email'
      }),
      password: t.String()
    })
  })
