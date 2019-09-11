const { I } = inject();

module.exports = {
  fields: {
    email: {name:'email'},
    password: {name:'password'}
  },
  login(email, password) {
    I.amOnPage('/');
    I.see('greyWing');
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.pressKey('Enter');
    I.seeElementInDOM('#loggedIn');
  },
  logout() {
    I.click('Logout');
    I.see('Successfully logged out.')
  }
}
