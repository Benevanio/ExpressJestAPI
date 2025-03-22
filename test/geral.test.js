const supertest = require('supertest');
const app = require('../app');

test('The application should return Hello World!', async () => {
    const response = await supertest(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
});
