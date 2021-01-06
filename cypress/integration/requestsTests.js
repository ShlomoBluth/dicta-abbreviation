/// <reference types="cypress"/>

//run tests on requests from abbreviation run

describe('requestsTests',()=>{

    
  beforeEach(() => {
    cy.visit('https://abbreviation.dicta.org.il/')
  })

  


  it('Error message for response with a delay of 2 minutes when clicking the run button'+
  ' of abbreviation page',()=>{
    cy.abbreviationRequest({
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
      delaySeconds:60*2
    })
  })

  
  it('Error message for response with status code 500 when clicking the run button of abbreviation page'
  ,()=>{
    cy.abbreviationRequest({
      status:500,
      message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
    })
  })
    
})