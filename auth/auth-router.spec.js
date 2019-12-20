const request = require('supertest');
const db = require('../database/dbConfig');
const server = require('../api/server');

describe('auth-router', () => {
  describe('POST /register', () => {
    beforeEach(async() => {
      await db('users').truncate();
    })
    it('should return 201 created', async() => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'test', password: 'pizza' })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it('should return a JSON object', async() => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'Lord Ryan', password: 'cookies' })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe('POST /login', () => {
    it('should return 200 OK', async() => {
      await request(server)
        .post('/api/auth/login')
        .send({ username: 'Lord Ryan', password: 'cookies' })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it('should return a JSON object', async() => {
      await request(server)
        .post('/api/auth/register')
        .send({ username: 'Lord Ryan', password: 'cookies' })
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    });
  })
})