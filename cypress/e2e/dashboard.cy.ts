describe('OrangeHRM Dashboard Suite', () => {
  beforeEach(() => {
    cy.visit('/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('should display the dashboard page', () => {
    cy.contains('Dashboard').should('be.visible');
    cy.get('header').should('contain', 'Dashboard');
  });

  it('should have a working logout button', () => {
    cy.get('span.oxd-userdropdown-tab').click();
    cy.contains('Logout').click();
    cy.url().should('include', '/auth/login');
  });

  // Add more OrangeHRM-specific test cases as needed
});

