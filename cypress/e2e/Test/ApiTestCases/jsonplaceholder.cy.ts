// Sample API test using JSONPlaceholder (https://jsonplaceholder.typicode.com)
// This demonstrates API automation using your framework structure

import { ApiHelper } from '../../../../utils/apiHelper';

describe('JSONPlaceholder API Tests', () => {
  it('should fetch a list of posts', () => {
    ApiHelper.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('should create a new post', () => {
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    ApiHelper.post('https://jsonplaceholder.typicode.com/posts', newPost).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.include(newPost);
    });
  });
});
