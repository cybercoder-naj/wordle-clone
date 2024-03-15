import { Elysia } from "elysia";
import elysiaNuxt from "elysiajs-nuxt";
import authRoutes from "@routes/auth";
import { logger } from '@grotto/logysia';

const api = new Elysia({ prefix: '/api' })
  .use(authRoutes);

const app = new Elysia()
  .use(logger({ logIP: true }))
  .onStart(({ server }) => {
    console.log(`Server started at ${server?.url}`);
  })
  .onStop(({ server }) => {
    console.log(`Server stopped at ${server?.url}`);
  })
  .use(elysiaNuxt)
  .use(api)
  .listen(8080);

export type Server = typeof app