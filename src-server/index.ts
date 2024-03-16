import { Elysia } from "elysia";
import elysiaNuxt from "elysiajs-nuxt";
import api from "./routes";
import { logger } from '@grotto/logysia';


const app = new Elysia()
  .use(logger({ logIP: true }))
  .use(elysiaNuxt)
  .use(api)
  .listen(8080);

export type Server = typeof app