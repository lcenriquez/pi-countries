/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const agent = session(app);
const country = {
  id: 'ARG',
  name: 'Argentina',
  flag: 'http://flag.com',
  continent: 'South America',
  capital: 'Buenos Aires'
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
    .then(() => Country.create(country)));

  describe('GET /countries', () => {
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });

  describe('GET /countries?name=', () => {
    it('should return Argentina when name=argentina', async () => {
      let response = await agent.get('/countries?name=argentina').expect(200);
      expect(response.body[0].name).to.equal('Argentina');
    });
    it('should return null when name=doesNotExist', async () => {
      let response = await agent.get('/countries?name=mexico').expect(200);
      expect(response.body[0]).to.equal(undefined);
    });
  });
});
