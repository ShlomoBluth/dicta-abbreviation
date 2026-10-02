/// <reference types="cypress"/>

//run basic tests on abbreviation run

import { urls, sizes, ABBREVIATION, EXPANSION } from '../support/targets'

urls.forEach((urlValue,urlKey)=>{
  sizes.forEach((sizeValue,sizeKey) => {
    describe('toolTests '+urlKey+' '+sizeKey,()=>{

      beforeEach(() => {
        cy.screenSize({size:sizeValue})
        cy.visitpage({url:urlValue})
      })

      it('abbreviation run',()=>{
        cy.closeWelcomeWindow()
        cy.abbreviationRun(ABBREVIATION)
        cy.resultsTests(EXPANSION)
      })
    })
  })
})
