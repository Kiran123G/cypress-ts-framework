import { baseConfig } from '../config/baseConfig';
import { stagingConfig } from '../config/staging';
import { prodConfig } from '../config/prod';

const env = Cypress.env('ENV') || 'staging';
const configs: any = { staging: stagingConfig, prod: prodConfig };
const config = configs[env] || baseConfig;

export class ApiHelper {
  // For OrangeHRM API (if needed)
  static getAuthToken(username: string = config.credentials.username, password: string = config.credentials.password) {
    return cy.request({
      method: 'POST',
      url: `${config.baseUrl}/web/index.php/api/v2/login`,
      body: { username, password },
      failOnStatusCode: false
    });
  }

  // For public APIs, use the full URL directly
  static get(url: string, options: Partial<Cypress.RequestOptions> = {}) {
    return cy.request({
      method: 'GET',
      url, // Use the url as-is
      ...options
    });
  }

  static post(url: string, body: any, options: Partial<Cypress.RequestOptions> = {}) {
    return cy.request({
      method: 'POST',
      url, // Use the url as-is
      body,
      ...options
    });
  }

  // Add more helpers for PUT, DELETE, etc. as needed
}