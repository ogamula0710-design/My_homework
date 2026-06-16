
Cypress.Commands.add('SentRequest', (type, url, body, headers) => { 
    cy.request({
        method: type,
        url: url,
        body: body,
        headers: {
            'Authorization': Cypress.env('token'),
        },
     failOnStatusCode: false
    })
})
