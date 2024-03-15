import { Elysia } from "elysia";
import { bearer } from "@elysiajs/bearer";

export default new Elysia()
  .use(bearer())
  .onBeforeHandle(({ bearer, set }) => {
    console.log(bearer)
    if (!bearer) {
      console.log(bearer)
      set.status = 'Unauthorized'
      return "Unauthorized"
    }
  })
  .resolve({ as: 'global' }, ({ bearer }) => {
    const user = bearer === "booyah" ? { name: "Nishant" } : null
    return { user }
  })