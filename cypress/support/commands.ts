// Custom Cypress commands for OrangeHRM

export {}; // Ensure this file is treated as a module

Cypress.Commands.add('login', (username: string = 'Admin', password: string = 'admin123') => {
  cy.visit('/web/index.php/auth/login');
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/dashboard');
});

Cypress.Commands.add('logout', () => {
  cy.get('span.oxd-userdropdown-tab').click();
  cy.contains('Logout').click();
  cy.url().should('include', '/auth/login');
});


declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<void>;
      logout(): Chainable<void>;
    }
  }
}
