const users = {
    headers: ['email', 'password', 'usertype'],
    data: [
        ['admin333@admin.com', 'adminpassword', 'Admin'],
        ['supplier333@supplier.com', 'supplierpassword', 'Supplier'],
        ['client333@client.com', 'clientpassword', 'Client']
    ]
}

const marketplaces = {
    headers: ['name', 'description'],
    data: [
        ['Market333', 'This is the first market'],
        ['Market334', 'This is the second market']
    ]   
}

const assetTypes = {
    headers: ['name', 'fields'],
    data: [
        ['Asset333', [
            {name: 'Field1', type: 'hyperlink', required: true, helptext: 'This is some help text'},
            {name: 'Field2', type: 'text', required: true, helptext: 'This is some help text'},
            {name: 'Field3', type: 'location', required: true, helptext: 'This is some help text'},
            {name: 'Field4', type: 'date', required: true, helptext: 'This is some help text'},
            {name: 'Field5', type: 'datetime', required: true, helptext: 'This is some help text'},
            {name: 'Field6', type: 'daterange', required: true, helptext: 'This is some help text'},
            {name: 'Field7', type: 'textarea', required: true, helptext: 'This is some help text'},
            {name: 'Field8', type: 'image', required: true, helptext: 'This is some help text'},
            {name: 'Field9', type: 'document', required: true, helptext: 'This is some help text'},
            {name: 'Field10', type: 'select', required: true, helptext: 'This is some help text', options: ["option1","option2"]},
            {name: 'Field11', type: 'number', required: true, helptext: 'This is some help text', options: "US$"},
        ]],
        ['Asset334', [
            {name: 'Field3', type: 'hyperlink', required: true, helptext: 'This is some help text'},
            {name: 'Field1', type: 'text', required: true, helptext: 'This is some help text'},
            {name: 'Field4', type: 'location', required: true, helptext: 'This is some help text'},
            {name: 'Field5', type: 'date', required: true, helptext: 'This is some help text'},
            {name: 'Field6', type: 'datetime', required: true, helptext: 'This is some help text'},
            {name: 'Field7', type: 'daterange', required: true, helptext: 'This is some help text'},
            {name: 'Field8', type: 'textarea', required: true, helptext: 'This is some help text'},
            {name: 'Field9', type: 'image', required: true, helptext: 'This is some help text'},
            {name: 'Field10', type: 'document', required: true, helptext: 'This is some help text'},
            {name: 'Field11', type: 'select', required: true, helptext: 'This is some help text', options: ["option1","option2"]},
            {name: 'Field12', type: 'number', required: true, helptext: 'This is some help text', options: "US$"},
        ]]
    ]
}

const sampleContractFields = [
    {name: 'Field1', type: 'hyperlink', editable: 'Client', required: undefined, helptext: 'This is some help text'},
    {name: 'Field2', type: 'text', editable: 'All', required: 'None', helptext: 'This is some help text'},
    {name: 'Field3', type: 'location', editable: 'All', required: 'Client', helptext: 'This is some help text'},
    {name: 'Field4', type: 'date', editable: 'Supplier', required: 'Supplier', helptext: 'This is some help text'},
    {name: 'Field5', type: 'datetime', editable: 'All', required: 'None', helptext: 'This is some help text'},
    {name: 'Field6', type: 'daterange', editable: 'All', required: 'None', helptext: 'This is some help text'},
    {name: 'Field7', type: 'textarea', editable: 'All', required: 'None', helptext: 'This is some help text'},
    {name: 'Field8', type: 'image', editable: 'All', required: 'None', helptext: 'This is some help text'},
    {name: 'Field9', type: 'document', editable: 'All', required: 'None', helptext: 'This is some help text'},
    {name: 'Field10', type: 'select', editable: 'All', required: 'None', helptext: 'This is some help text', options: ["option1","option2"]},
    {name: 'Field11', type: 'number', editable: 'All', required: 'None', helptext: 'This is some help text', options: "US$"},
    {name: 'Field12', type: 'updatable', editable: 'All', required: 'None', helptext: 'This is some help text'},
]

const contracts = {
    headers: ['name', 'description', 'marketplaceName', 'assetTypeName', 'searchDisplayFields', 'phases'],
    data: [
        [
            'Contract333', 
            'This is a description for a contract', 
            marketplaces.data[0][0], 
            assetTypes.data[0][0], 
            ['Field1'],
            [
                ['Request for Quotation', false, sampleContractFields],
                ['Quote', false, sampleContractFields],
                ['New Phase', true, sampleContractFields]
            ]            
        ]
    ]
}


const pageRoutes = [
    {
        url: '/settings',
        access: {
            client: true,
            supplier: true,
            admin: true,
        }
    },
    {
        url: '/find-assets',
        access: {
            client: true,
            supplier: false,
            admin: false,
        }
    },
    {
        url: '/engagements',
        access: {
            client: true,
            supplier: true,
            admin: false,
        }
    },
    {
        url: '/list-assets',
        access: {
            client: false,
            supplier: true,
            admin: false,
        }
    },
    {
        url: '/contracts',
        access: {
            client: false,
            supplier: false,
            admin: true,
        }
    },
    {
        url: '/asset-types',
        access: {
            client: false,
            supplier: false,
            admin: true,
        }
    },
    {
        url: '/marketplaces',
        access: {
            client: false,
            supplier: false,
            admin: true,
        }
    },
]

module.exports = { users, marketplaces, assetTypes, pageRoutes, contracts};