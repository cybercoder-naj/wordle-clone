# Wordle Clone

A Full-stack TypeScript project, mimicing the Wordle game with friendly leaderboards.

## Tech Stack

- [SQLite](https://bun.sh/docs/api/sqlite)
- [Elysia](https://elysiajs.com/)
- [Nuxt3](https://nuxt.com) and  [TailwindCSS v4](https://tailwindcss.com/blog/tailwindcss-v4-alpha)
- [Bun](https://bun.sh)

## Roadmap

**Note**: Milestones from "Dummy Authentication" to "JWT Authentication" (exclusive) are server-side only.

- [x] Dummy Authentication 
- [ ] Setup API route to fetch word of the day
- [ ] Bun's SQLite Database
- [ ] CRON job to change the word everyday
- [ ] JWT Authentication
- [ ] Profile page (name, photo, and score)
- [ ] Display leaderboard
- [ ] Add friends and show friend leaderboard
- [ ] Use GPT/Gemma to get the next word

## Installation

Clone this repository with HTTPS, SSH or GitHub CLI.

```bash
  git clone https://github.com/cybercoder-naj/wordle-clone.git
```

Install the dependencies with:

```bash
  bun
```

## Running the project

### Development 

Start the server **and** the client. Listen on http://localhost:8080.

```bash
  bun server:dev
  bun client:dev
```

### Production

Build the client in production and start the server.

```bash
  bun client:build
  bun server:start
```

## Testing

**Note**: Currently, only the server is tested.

To run tests, run:

```bash
  bun test
```

## Authors

- [@cybercoder-naj](https://github.com/cybercoder-naj)

## License

[MIT](./LICENSE)