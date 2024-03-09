import { describe, expect, it } from 'bun:test';
import { edenTreaty } from '@elysiajs/eden';
import { type Server } from '../src-server';

const api = edenTreaty<Server>('http://localhost:8080')

describe('Authentication', () => {
  describe('Log in', () => {
    it('Authenticate valid credentials', async () => {
      const { data, status, headers } = await api.auth.login.post({
        email: "nishant@gmail.com",
        password: "pass1234"
      })

      expect(data).toBe("Successful login")
      expect(status).toBe(200)
      expect(headers.get('set-cookie')).toContain("token=booyah")
    })

    it('Decline invalid credentials', async () => {
      const { data, status, headers } = await api.auth.login.post({
        email: "someone@gmail.com",
        password: "thePassword"
      })

      expect(data).toBe("Invalid credentials")
      expect(status).toBe(401)
      expect(headers.get('set-cookie')).toBeNil()
    })
  })

  describe('Log out', () => {
    it('Log out a user who has token', async () => {
      const { data, status, headers } = await api.auth.logout.post({
        $fetch: {
          headers: {
            'Authorization': 'Bearer booyah'
          }
        }
      })

      expect(data).toBe("Successful logout")
      expect(status).toBe(200)
      expect(headers.get('set-cookie')).toContain("token=")
    })

    it('Error when logging out user without token', async () => {
      const { data, status } = await api.auth.logout.post()

      expect(data).toBe("Unauthorized")
      expect(status).toBe(401)
    })

    it('Error when logging out user with wrong token', async () => {
      const { data, status } = await api.auth.logout.post({
        $fetch: {
          headers: {
            'Authorization': 'Bearer heeyah'
          }
        }
      })

      expect(data).toBe("Unauthorized")
      expect(status).toBe(401)
    })
  })
})
