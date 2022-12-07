Cypress.Commands.add('closeWelcomeWindow',()=>{
  cy.get('body').then(($body) => {
    if($body.find('a[class="welcome-close-link"]').length){
      cy.get('a[class="welcome-close-link"]').click({force: true})
    }
  })
})

Cypress.Commands.add('abbreviationRun',(text)=>{
  cy.get('[placeholder="הזן טקסט כאן"]').type(text)
  cy.get('button').contains(/החל לפענח|החל פיענוח/g).click({force:true})
})

Cypress.Commands.add('resultsTests',(text)=>{
  cy.get('.expansion').contains(text).should('exist')
  // cy.url().then(url=>{
  //   if(url.includes(Cypress.env('DEV_URL'))){
  //     cy.get('.expansion').contains(text).should('exist')
  //   }else{
  //     cy.get('.main-results-box > p').contains(text).should('exist')
  //   }
  // })
})

Cypress.Commands.add('abbreviationRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST',url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.closeWelcomeWindow()
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.abbreviationRun('רשב"ג')



  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  } 
})