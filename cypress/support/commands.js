const RUN_BUTTON = /החל לפענח|החל פיענוח/

Cypress.Commands.add('closeWelcomeWindow',()=>{
  cy.get('body').then(($body) => {
    const $close = $body.find('a.welcome-close-link')
    if($close.length){
      cy.wrap($close).click({force: true})
    }
  })
})

Cypress.Commands.add('abbreviationRun',(text)=>{
  cy.get('[placeholder="הזן טקסט כאן"]').type(text)
  cy.contains('button', RUN_BUTTON).click({force:true})
})

Cypress.Commands.add('resultsTests',(text)=>{
  cy.contains('.expansion', text).should('exist')
})

Cypress.Commands.add('abbreviationRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', url, {
    delay: 1000*delaySeconds,
    statusCode: status
  })
  cy.closeWelcomeWindow()
  if(message){
    cy.contains(message).should('not.exist')
  }
  cy.abbreviationRun('רשב"ג')
  if(message){
    // wait for the message directly instead of waiting for the spinner first
    cy.contains(message, {timeout: Cypress.config('defaultCommandTimeout') + 1000*delaySeconds})
      .should('exist')
  }
})
