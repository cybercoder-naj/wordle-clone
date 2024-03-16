import { describe, it, expect } from "bun:test";
import { type Server } from "../src-server";
import { edenTreaty } from "@elysiajs/eden";

const app = edenTreaty<Server>("http://localhost:8080");

describe("Word", () => {
  it("Give me a word based on the timezone", async () => {
    const { data, status } = await app.api.word.get({
      $query: {
        timezone: "America/New_York"
      }
    });

    expect(status).toBe(200);
    expect(data).toMatch(/[A-Z]{5}/)
  });
});