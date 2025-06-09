// OrangeHRM XPath selectors for reuse in tests and page objects

export const xpaths = {
  login: {
    username: '//input[@name="username"]',
    password: '//input[@name="password"]',
    submit: '//button[@type="submit"]',
  },
  dashboard: {
    header: '//header//h6[text()="Dashboard"]',
    userDropdown: '//span[contains(@class, "oxd-userdropdown-tab")]',
    logout: '//a[text()="Logout"]',
  },
  // Add more selectors as needed for other OrangeHRM modules
};
