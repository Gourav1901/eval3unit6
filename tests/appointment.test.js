
const request = require('supertest');
const app = require('../app'); 

describe('Appointment API', () => {
  let adminToken, userToken;

  beforeAll(async () => {
    // Mock users and generate tokens
  });

  test('Admin approves appointment', async () => {
    const res = await request(app)
      .put('/appointments/1/approve')
      .set('Authorization', `Bearer ${adminToken}`)
      .send({ status: 'approved' });
    expect(res.statusCode).toBe(200);
  });

  test('User cannot approve appointment', async () => {
    const res = await request(app)
      .put('/appointments/1/approve')
      .set('Authorization', `Bearer ${userToken}`);
    expect(res.statusCode).toBe(403);
  });
});
