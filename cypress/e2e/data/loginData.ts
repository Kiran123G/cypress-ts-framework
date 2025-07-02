// cypress/e2e/testdata/loginData.ts

// Update the import path below to the correct relative path if 'interfaces.ts' is in 'cypress/e2e/interfaces'
import { LoginPageData } from '../Interfaces/InterfaceLoginPage';
import { InvalidLoginPageData } from '../Interfaces/InterfaceLoginPage';

export const validLoginData: LoginPageData = {
  username: 'Admin',
  password: 'admin123',
};

export const invalidLoginData: InvalidLoginPageData = {
Invalidusername: 'Admin',
  Invalidpassword: 'Adminsgerg',
};
