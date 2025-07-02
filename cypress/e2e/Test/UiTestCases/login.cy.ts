import { LoginPage } from '../../Pages/LoginPage';
import { baseConfig } from '../../../../config/baseConfig';
import { stagingConfig } from '../../../../config/staging';
import { prodConfig } from '../../../../config/prod';
import { validLoginData, invalidLoginData } from '../../data/loginData';



const env = Cypress.env('ENV') || 'staging';
const configs: any = { staging: stagingConfig, prod: prodConfig };
const config = configs[env] || baseConfig;

describe('OrangeHRM Login Test', () => {
  const loginPage = new LoginPage();

  it('should login successfully with valid credentials', () => {
    loginPage.login(); // Uses credentials from config
    cy.url().should('include', '/dashboard');
  });

  it('should show error with invalid credentials', () => {
    loginPage.login(invalidLoginData.Invalidusername, invalidLoginData.Invalidpassword);
    cy.contains('Invalid credentials').should('be.visible');
  });
});