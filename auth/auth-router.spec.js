const request = require('supertest');
const server = require('../api/server.js');

describe('auth router', () => {
  describe('login endpoint', () => {
    it('should allow user to login', async function() {
      await request(server)
        .post('/login')
        .send({ username: 'Odin', password: '1234' })
        .expect(200);
    })
  })
})