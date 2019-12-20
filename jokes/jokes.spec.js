const request = require('supertest');
const server = require('../api/server.js');

describe('jokes router', () => {
  describe('GET /', () => {
    it('should return 400 error', function() {
      return request(server)
        .get('/api/jokes')
        .then(res => {
          expect(res.status).toBe(400);
        });
    });
    it('should return JSON', function() {
      return request(server)
        .get('/api/jokes')
        .then(res => {
          expect(res.type).toMatch(/json/i);
        });
    })
  })
});