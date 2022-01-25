const request = require('supertest')('https://skillacademy.com/api/skillacademy/discovery');
const assert = require('chai').assert;

describe('Skillacademy API', () => {
  it('GET /search?page=2', () => {
    return request
      .get('/search?page=2')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?pageSize=20', () => {
    return request
      .get('/search?pageSize=20')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?searchQuery=1', () => {
    return request
      .get('/search?searchQuery=1')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?minPrice=1', () => {
    return request
      .get('/search?minPrice=1')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?minDuration=1', () => {
    return request
      .get('/search?minDuration=1')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?maxDuration=1', () => {
    return request
      .get('/search?maxDuration=1')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?sortBy=', () => {
    return request
      .get('/search?sortBy=')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

  it('GET /search?orderBy=asc', () => {
    return request
      .get('/search?orderBy=asc')
      .expect(200)
      .then((res) => {
        // assert data being return to not be empty
        assert.isNotEmpty(res.body);
      });
  });

});