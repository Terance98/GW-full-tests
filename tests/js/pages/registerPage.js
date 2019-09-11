const { I } = inject();

module.exports = {
  fields: {
    email: {name:'email'},
    password: {name:'password'},
    usertype: '.select2-search__field',
    admincode: 'admincreationcode'
  },
  register(email, password, usertype) {
    I.amOnPage('/sign-up');
    I.see('Sign up');
    I.fillField(this.fields.email,email);
    I.fillField(this.fields.password,password);
    I.click('#select2-user-type-container');
    I.fillField(this.fields.usertype,usertype);
    I.pressKey('Enter');    
    if(usertype === "Admin"){
        I.fillField(this.fields.admincode,'JOLLYROGER');
    }
    I.click('Sign up');
    I.wait(2);
    I.see('Registration successful.'); 
  },
}
