const data = require('./data');

Feature('User Management');

let accounts = new DataTable(data.users.headers);
let marketplaces = new DataTable(data.marketplaces.headers);
let assetTypes = new DataTable(data.assetTypes.headers);
let contracts = new DataTable(data.contracts.headers);

data.users.data.forEach(row => accounts.add(row));
data.marketplaces.data.forEach(row => marketplaces.add(row));
data.assetTypes.data.forEach(row => assetTypes.add(row));
data.contracts.data.forEach(row => contracts.add(row));

Data(accounts).Scenario('Create Account', (I, current, registerPage) => {
    registerPage.register(current.email, current.password, current.usertype);
});

Data(accounts).Scenario('Successful Login and Access Check', (I, current, loginPage) => {
    loginPage.login(current.email, current.password);
    data.pageRoutes.map(page => {
        I.amOnPage(page.url);
        if(current.usertype in page.access && page.access[current.usertype])
            I.seeCurrentUrlEquals(page.url);
        else
            I.dontSeeCurrentUrlEquals(page.url);
    })        
    loginPage.logout();
})

Data(marketplaces).Scenario('Creating Marketplaces and check Listing', (I, current, loginPage, marketplacePage) => {
    let firstAdmin = data.users.data.filter(user => user[2] === 'admin')[0];
    loginPage.login(firstAdmin[0], firstAdmin[1]);
    marketplacePage.create(current.name, current.description);    
})

Data(assetTypes).Scenario('Creating Asset Types', (I, current, loginPage, assetTypePage) => {
    let firstAdmin = data.users.data.filter(user => user[2] === 'admin')[0];
    loginPage.login(firstAdmin[0], firstAdmin[1]);
    assetTypePage.create(current.name, current.fields);
})

Data(contracts).Scenario('Creating Contracts', (I, current, loginPage, contractPage) => {
    let firstAdmin = data.users.data.filter(user => user[2] === 'admin')[0];
    loginPage.login(firstAdmin[0], firstAdmin[1]);
    contractPage.create(current.name, current.description, current.marketplaceName, current.assetTypeName, current.searchDisplayFields, current.phases);        
})