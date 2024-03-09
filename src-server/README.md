# Wordle Clone Server

## Running the Server

From the root directory, run the server with:

```bash
  bun server:dev # for development
  bun server:start # for production
```

## Dependencies

- [Elysia](https://elysiajs.com/) to develop the API.
- [Elysia Nuxt](https://github.com/trylovetom/elysiajs-nuxt) to integrate Nuxt frontend as the client.
- [Eden](https://elysiajs.com/eden/overview) to call API endpoints with type safety.
- [Bearer](https://elysiajs.com/plugins/bearer.html) to fetch the Authorization token.

## Project Structure

- [`index.ts`](./index.ts) The entry point of the server.
- [`routes`](./routes/) Grouped API endpoints.
- [`models`](./models/) Models and DTOs for the server.
- [`middleware`](./middleware/) Elysia plugins for request validation and authentication.