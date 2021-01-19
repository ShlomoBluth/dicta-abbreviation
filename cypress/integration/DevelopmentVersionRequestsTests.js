/// <reference types="cypress"/>

//run tests on requests from abbreviation run

describe('requestsTests',()=>{

    
    beforeEach(() => {
      cy.visit('https://sharing-abbreviation.netlify.app/')
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
      
  })