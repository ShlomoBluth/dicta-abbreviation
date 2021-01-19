Cypress.Commands.add('abbreviationRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST',url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.get('body').then(($body) => {
    if($body.find('a[class="welcome-close-link"]').length){
      cy.get('a[class="welcome-close-link"]').click({force: true})
    }
  })
  cy.get('[placeholder="הזן טקסט כאן"]').type('רשב"ג')
  if(message.length>0){
    cy.contains(message).should('not.exist')
  }
  cy.get('button').contains(/החל לפענח|החל פיענוח/g).click({force:true})



  if(delaySeconds>0){
    cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
  }
  
  if(message.length>0){
    cy.contains(message).should('exist')
  } 
})