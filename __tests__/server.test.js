'use strict';

const supertest = require('supertest');
const {app} = require('../src/server');
const request = supertest(app);
const PORT = process.env.PORT || 3002;

describe('API Server', () => {

  it('handles invalid requests', async () => {
    const response = await request.get('/fake');

    expect(response.status).toEqual(404);
  });

  it('handles errors', async () => {
    const response = await request.get('/500-test');

    expect(response.status).toEqual(500);
    expect(response.body.route).toEqual('/500-test');
    expect(response.body.message).toEqual('server error');
  });

  it('handles root path', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBeTruthy();
    expect(response.text).toEqual('hello world');
  });

});
