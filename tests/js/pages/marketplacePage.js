const { I } = inject();

module.exports = {
  fields: {
    name: {name:'name'},
    description: {name:'description'}
  },
  create(name, description) {
    I.amOnPage('/marketplaces');
    I.wait(2);
    // pause();
    I.click('Create Market');
    I.wait(3);
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.description, description);
    I.click('Save Market');
    I.see('Market successfully created. Add an image?');
    I.click('Save Market');
    I.see('Markets');
    I.see(name);
    I.see(description);
  }
}
