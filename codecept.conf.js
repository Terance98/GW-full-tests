exports.config = {
  tests: './tests/js/*_test.js',
  output: './tests/output',
  helpers: {
    Puppeteer: {
      restart: false,
      show: true,
      url: 'http://terance.grey-wing.com:9090',
      nosandbox: true
    }
  },
  include: {
    loginPage: './tests/js/pages/loginPage.js',
    registerPage: './tests/js/pages/registerPage.js',
    marketplacePage: './tests/js/pages/marketplacePage.js',
    assetTypePage: './tests/js/pages/assetTypePage.js',
    contractPage: './tests/js/pages/contractPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'server'
}