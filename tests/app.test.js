const app = require('../index');
const request = require('supertest')
const db = require('../models');
const User = db.user;

describe("user sign-up test", () => {

  it("given valid username and password", async () => {
    const response = await request(app)
      .post('/sign-up')
      .send({
        username: 'Aurora',
        password: 'umasenha'
      })
      .expect('Content-Type', /json/)
      .expect(201)

    expect(response.body).toEqual({ message: "User registered" });
  })

  afterAll(async () => {
    User.destroy({ where: { username: 'Aurora' } });
  })

})