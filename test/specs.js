const supertest = require('supertest');
const app = require('../app');
require('should');

const server = supertest(app);

describe('Server launch test', () => {
  it('should return landing page', (done) => {
    server.get('/')
      .expect('Content-Type', /text/)
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});
