const { I } = inject();

module.exports = {
  fields: {
    name: 'name',
    description: 'description'
  },
  create(name, description) {
    I.amOnPage('/marketplaces');
    I.click('Create Market');
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
