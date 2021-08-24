/// <reference types="cypress"/>

//run basic tests on abbreviation run

let sizes = [[1000, 660]]//'iphone-x',



sizes.forEach((size) => {

    
    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })

        it('abbreviation run',()=>{
            cy.closeWelcomeWindow()
            cy.abbreviationRun('חכ"א')
            cy.resultsTests('חכמים אומרים')
        })
    })

})

