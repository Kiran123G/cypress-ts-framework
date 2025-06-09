import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // Specify the folder where your test files are located
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
  },
});
