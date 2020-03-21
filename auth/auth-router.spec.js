const server = require('./auth-router.js');
const request = require('supertest');

describe('POST /', () => {
	it('has process.env as "testing"', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});
});
