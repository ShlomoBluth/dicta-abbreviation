/// <reference types="cypress"/>

//run tests on requests from abbreviation run

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

  describe('requestsTests',()=>{

    
    beforeEach(() => {
      if (Cypress._.isArray(size)) {
        Cypress.config({
          viewportWidth: size[0],
          viewportHeight: size[1]
        })
        cy.viewport(size[0], size[1])
      } else {
        Cypress.config({
          viewportWidth: 375,
          viewportHeight: 812
        })
        cy.viewport(size)
      }
      cy.visit('https://abbreviation.dicta.org.il/')
    })
  
    
  
  
    it('Error message for api response with a delay of 2 minutes when clicking the run button'+
    ' of abbreviation page',()=>{
      cy.abbreviationRequest({
        url:'/api',
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
        delaySeconds:60*2
      })
    })
  
    
    it('Error message for api response with status code 500 when clicking the run button of abbreviation page'
    ,()=>{
      cy.abbreviationRequest({
        url:'/api',
        status:500,
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
      })
    })
  
    it('Error message for genreclassify response with a delay of 2 minutes when clicking the run button'+
    ' of abbreviation page',()=>{
      cy.abbreviationRequest({
        url:'/genreclassify',
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר',
        delaySeconds:60*2
      })
    })
  
    
    it('Error message for genreclassify response with status code 500 when clicking the run button of abbreviation page'
    ,()=>{
      cy.abbreviationRequest({
        url:'/genreclassify',
        status:500,
        message:'לא ניתן לגשת כעת לשרת, נסה שוב מאוחר יותר'
      })
    })
      
  })

})


