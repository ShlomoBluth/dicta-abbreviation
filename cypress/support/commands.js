Cypress.Commands.add('abbreviationRequest',({status=200,message='',delaySeconds=0})=>{
    cy.intercept('POST', '/api', {
        delayMs:1000*delaySeconds,
        statusCode: status
      },
    ).as('api')
    cy.intercept('POST', '/genreclassify', {
        delayMs:1000*delaySeconds,
        statusCode: status
      },
    ).as('genreclassify')
    cy.get('[class="welcome-close-link"]').click()
    cy.get('[placeholder="הזן טקסט כאן"]').type('רשב"ג')
    if(message.length>0){
        cy.contains(message).should('not.exist')
    }
    cy.get('button').contains('החל לפענח').click({force:true})
    if(delaySeconds>0){
        cy.get('[class*="spinner"').should('exist')
    }
    cy.wait('@api',{responseTimeout:1000*delaySeconds})
    cy.wait('@genreclassify',{responseTimeout:1000*delaySeconds})
    cy.get('[class*="spinner"').should('not.exist')
    cy.get('@api').its('response.statusCode').should('eq',status)

    if(message.length>0){
        cy.contains(message).should('exist')
    }
})