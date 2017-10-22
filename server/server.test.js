const request = require('supertest');
const expect = require('expect');
const app = require('./server');

describe('Server', () => {
    describe('GET /', () => {
        it('should return an object', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: "Page not found"
                    })
                })
                .end(done);
        });
    })
    describe('GET /users', () => {
        it('should return my user object', done => {
            request(app)
                .get('/users')
                .expect(200)
                .expect(res => {
                    expect(res.body).toInclude({
                        name: 'Francesco',
                        age: 31
                    })
                })
                .end(done)
        });
    })
});



