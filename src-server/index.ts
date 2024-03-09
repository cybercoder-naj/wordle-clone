import { Elysia } from "elysia";
import elysiaNuxt from "elysiajs-nuxt";
import authRoutes from "./routes/auth";

const app = new Elysia()
  .onStart(({ server }) => {
    console.log(`Server started at ${server?.url}`);
  })
  .onStop(({ server }) => {
    console.log(`Server stopped at ${server?.url}`);
  })
  .use(elysiaNuxt)
  .use(authRoutes)
  .listen(8080);

export type Server = typeof app

