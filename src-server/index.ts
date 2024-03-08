import { Elysia } from "elysia";
import elysiaNuxt from "elysiajs-nuxt";

const app = new Elysia()
  .onStart(({ server }) => {
    console.log(`Server started at ${server?.url}`);
  })
  .onStop(({ server }) => {
    console.log(`Server stopped at ${server?.url}`);
  })
  .use(elysiaNuxt)
  .get("/api/hi", () => "Hello, Elysia!")
  .listen(8080);
