/// <reference types="cypress"/>

//run basic tests on abbreviation run

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://abbreviation.dicta.org.il/')
    })

    it('abbreviation run',()=>{
        cy.closeWelcomeWindow()
        cy.abbreviationRun('חכ"א')
        cy.resultsTests('חכמים אומרים')
    })
})