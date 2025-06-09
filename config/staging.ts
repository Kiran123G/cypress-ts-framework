// Staging environment configuration
export const stagingConfig = {
  baseUrl: 'https://opensource-demo.orangehrmlive.com',
  apiEndpoint: 'https://opensource-demo.orangehrmlive.com/api', // Update if OrangeHRM exposes an API
  credentials: {
    username: 'Admin',
    password: 'admin123'
  },
  featureFlags: {
    newDashboard: true,
    betaFeature: false
  }
};
