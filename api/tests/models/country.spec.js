const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('Create', () => {
      it('should throw errors if object is empty', (done) => {
        Country.create({})
        .catch(error => {
          expect(error).not.to.equal(null);
          done();
        });
      });
      it('should throw validation errors even if some argument is passed', async () => {
        let country;
        try {
          country = await Country.create({ name: 'Argentina' });
        } catch(error) {
          expect(error).not.to.equal(null);
        }
      });
      it('should work if all arguments are passed', async () => {
        let country;
        const validCountry = {
          id: 'ARG',
          name: 'Argentina',
          flag: 'http://flag.com',
          continent: 'South America',
          capital: 'Buenos Aires'
        };
        try {
          country = await Country.create(validCountry);
        } catch(error) { console.log(error) }
        expect(country.name).to.equal('Argentina');
      });
    });
  });
});
