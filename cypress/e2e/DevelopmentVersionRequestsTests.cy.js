/// <reference types="cypress"/>

//run tests on requests from dev abbreviation run

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

  describe('DevelopmentVersionRequestsTests',()=>{

    
    beforeEach(() => {
      cy.screenSize({size:size})
      cy.visitpage({url:'/'})
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

})
