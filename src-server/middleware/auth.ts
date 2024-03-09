import { Elysia } from "elysia";
import { bearer } from "@elysiajs/bearer";

export default new Elysia()
  .use(bearer())
  .onBeforeHandle(({ bearer, set }) => {
    if (!bearer) {
      set.status = 'Unauthorized'
      return "Unauthorized"
    }
  })
  .resolve(({ bearer }) => {
    const user = bearer === "booyah" ? { name: "Nishant" } : null
    return { user }
  })