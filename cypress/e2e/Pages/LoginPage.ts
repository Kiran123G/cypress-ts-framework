// OrangeHRM Login Page Object
import { baseConfig } from '../../../config/baseConfig';
import { stagingConfig } from '../../../config/staging';
import { prodConfig } from '../../../config/prod';
import { xpaths } from '../../../utils/xpaths';

const env = Cypress.env('ENV') || 'staging';
const configs: any = { staging: stagingConfig, prod: prodConfig };
const config = configs[env] || baseConfig;

export class LoginPage {
  visit() {
    cy.visit('/web/index.php/auth/login');
  }

  enterUsername(username: string = config.credentials.username) {
    cy.xpath(xpaths.login.username).type(username);
  }

  enterPassword(password: string = config.credentials.password) {
    cy.xpath(xpaths.login.password).type(password);
  }

  submit() {
    cy.xpath(xpaths.login.submit).click();
  }

  login(username?: string, password?: string) {
    this.visit();
    this.enterUsername(username || config.credentials.username);
    this.enterPassword(password || config.credentials.password);
    this.submit();
  }
}
