const { I } = inject();

module.exports = {

  // TODO: Add option and route for editing phase names

  addPhase(phasename) {
    I.fillField('Phase Name', phasename);
    I.click('Add Phase');
  },

  addField(phasename, name, type, required, editable, helptext, options) {
    I.waitForInvisible('#addElementTypeModal');
    I.click(
      (locate('.card').withChild(locate('div').withText(phasename))).find('#contract-add-row').as(`${phasename} + New Field`)
    );
    I.waitForVisible('#addElementTypeModal');
    I.fillField({name:'fieldname'}, name);
    if(required && required != '')
      I.selectOption('detailed-field-required', required)
    if(editable && editable != '')
      I.selectOption('field-editable', editable)
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
    I.click('Save Contract');
    I.amOnPage('/contracts');
    I.see(name);
  },

  createContractPhase1(name, description, marketplaceName, assetTypeName, searchDisplayFields) {
    I.amOnPage('/contracts');
    I.click('Create Contract');
    I.fillField('name', name);
    I.fillField('description', description);
    I.selectOption('#marketplace-select',marketplaceName);
    I.selectOption('#asset-select',assetTypeName);
    if(searchDisplayFields && searchDisplayFields.length > 0)
      searchDisplayFields.map(field => {
        I.fillField('.select2-search__field','First Name');
        I.pressKey('Enter');    
      })
    // Re-enable this once these options are actually available
    // I.checkOption('assetengaged');
    // I.checkOption('multipleassets');
    I.click('Save Contract');
    I.see('Contract creation successful.');
  },

  create(name, description, marketplaceName, assetTypeName, searchDisplayFields, phases) {
    this.createContractPhase1(name, description, marketplaceName, assetTypeName, searchDisplayFields);
    phases.forEach(phase => {
      if(phase[1])
          this.addPhase(phase[0])
      phase[2].forEach(field => {
          this.addField(phase[0], field.name, field.type, field.required, field.editable, field.helptext, field.options)
      })
    });
    this.finish(name);
  },

}
