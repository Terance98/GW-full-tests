const { I } = inject();

module.exports = {

  startCreation(name) {
    I.amOnPage('/asset-types');
    I.click('Create Asset Type');
    I.fillField('Asset Type Name',name);
  },

  addField(name, type, required, helptext, options) {
    I.waitForInvisible('#addElementTypeModal');
    I.click('+ New Field');
    I.waitForVisible('#addElementTypeModal');
    I.fillField({name:'fieldname'}, name);
    if(required)
      I.checkOption('simple-field-required');
    else
      I.uncheckOption('simple-field-required');
    if(helptext)
      I.fillField({name: 'help-text'},helptext);
    if(type === 'select' && options && options.length) {
      options.map(option => {
        I.click('#select-row .select2');
        I.fillField('#select-row .select2',option);  
        I.pressKey('Enter');
      })
    }
    if(type === "number" && options) 
      I.fillField('Enter Unit', options);
    I.click(`#${type}-row .btn`);
  },

  finish(name) {
    I.click('Save Asset');
    I.see("Asset Type successfully created! Redirecting...");
    I.amOnPage('/asset-types');
    I.see(name);
  },

  create(name, fields) {
    this.startCreation(name);
    fields.map(field => {
      this.addField(field.name, field.type, field.required, field.helptext, field.options);
    })
    this.finish(name);
  }
}
