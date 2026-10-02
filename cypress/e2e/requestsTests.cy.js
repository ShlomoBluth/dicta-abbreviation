/// <reference types="cypress"/>

//run tests on requests from abbreviation run

import { urls, sizes, SERVER_ERROR } from '../support/targets'

const cases = []
;['/api','/genreclassify'].forEach(endpoint=>{
  const name = endpoint.slice(1)
  cases.push({
    title:'Error message for '+name+' response with a delay of 2 minutes when clicking the run button of abbreviation page',
    request:{url:endpoint, message:SERVER_ERROR, delaySeconds:60*2}
  })
  cases.push({
    title:'Error message for '+name+' response with status code 500 when clicking the run button of abbreviation page',
    request:{url:endpoint, status:500, message:SERVER_ERROR}
  })
})

urls.forEach((urlValue,urlKey)=>{
  sizes.forEach((sizeValue,sizeKey) => {
    describe('requestsTests '+urlKey+' '+sizeKey,()=>{

      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
      })

      cases.forEach(({title,request})=>{
        it(title,()=>{
          cy.abbreviationRequest(request)
        })
      })
    })
  })
})
