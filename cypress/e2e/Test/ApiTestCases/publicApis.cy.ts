// Sample API tests for various public APIs from apipheny.io/free-api
import { ApiHelper } from '../../../../utils/apiHelper';

describe('Public APIs Smoke Tests', () => {

  function saveResponseToFixture(filename: string, data: any) {
    // cy.writeFile must use a relative path from the project root
    cy.writeFile(`cypress/fixtures/${filename}`, data, { log: true });
  }



  it('should get the current Bitcoin price', () => {
    ApiHelper.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.bpi).to.have.property('USD');
      saveResponseToFixture('bitcoinPrice.json', response.body);
    });
  });

  

  it('should predict gender for a name using Genderize.io', () => {
    ApiHelper.get('https://api.genderize.io?name=luc').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('gender');
      saveResponseToFixture('genderize.json', response.body);
    });
  });

  it('should predict nationality for a name using Nationalize.io', () => {
    ApiHelper.get('https://api.nationalize.io?name=nathaniel').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('country');
      saveResponseToFixture('nationalize.json', response.body);
    });
  });

  it('should get US population data from Data USA', () => {
    ApiHelper.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.be.an('array');
      saveResponseToFixture('usPopulation.json', response.body);
    });
  });

  it('should get a random dog image', () => {
    ApiHelper.get('https://dog.ceo/api/breeds/image/random').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.match(/^https?:\/\//);
      saveResponseToFixture('dogImage.json', response.body);
    });
  });

  it('should get the current IP address from IPify', () => {
    ApiHelper.get('https://api.ipify.org?format=json').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.ip).to.match(/\d+\.\d+\.\d+\.\d+/);
      saveResponseToFixture('ipify.json', response.body);
    });
  });

  it('should get geo info for an IP from IPinfo', () => {
    ApiHelper.get('https://ipinfo.io/161.185.160.93/geo').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('city');
      saveResponseToFixture('ipinfo.json', response.body);
    });
  });

  it('should get a random joke', () => {
    ApiHelper.get('https://official-joke-api.appspot.com/random_joke').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.setup).to.be.a('string');
      saveResponseToFixture('joke.json', response.body);
    });
  });

  it('should get a random user', () => {
    ApiHelper.get('https://randomuser.me/api/').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.results).to.be.an('array');
      saveResponseToFixture('randomUser.json', response.body);
    });
  });



  it('should get info for a US ZIP code from Zippopotam', () => {
    ApiHelper.get('https://api.zippopotam.us/us/33162').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('places');
      saveResponseToFixture('zippopotam.json', response.body);
    });
  });
});
