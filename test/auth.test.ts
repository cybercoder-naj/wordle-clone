import { describe, expect, it } from 'bun:test';
import { edenTreaty } from '@elysiajs/eden';
import { type Server } from '../src-server';

const api = edenTreaty<Server>('http://localhost:8080')

describe('Authentication', () => {
  describe('Log in', () => {
    it('Should authenticate valid credentials', async () => {
      const { data, status, headers } = await api.auth.login.post({
        email: "nishant@gmail.com",
        password: "pass1234"
      })

      expect(data).toBe("Successful login")
      expect(status).toBe(200)
      expect(headers.get('set-cookie')).toContain("token=booyah")
    })

    it('Should decline invalid credentials', async () => {
      const { data, status, headers } = await api.auth.login.post({
        email: "someone@gmail.com",
        password: "thePassword"
      })

      expect(data).toBe("Invalid credentials")
      expect(status).toBe(401)
      expect(headers.get('set-cookie')).toBeNil()
    })
  })
})
