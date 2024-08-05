/// <reference types="cypress"/>

//run basic tests on abbreviation run 

//let sizes = [[1000, 660]]//'iphone-x',

const urls = new Map();
urls.set('live',Cypress.env('LIVE_URL'))
urls.set('dev',Cypress.env('DEV_URL')) 

const sizes= new Map();
sizes.set('desktop',[1000, 660])
//sizes.set('mobile','iphone-x')


urls.forEach((urlValue,urlKey)=>{

    sizes.forEach((sizeValue,sizeKey) => {

    
        describe('toolTests '+urlKey+' '+sizeKey,()=>{
    
            beforeEach(() => {
                cy.screenSize({size:sizeValue})
                cy.visitpage({url:urlValue})
            })
    
            it('abbreviation run',()=>{
                cy.closeWelcomeWindow()
                cy.abbreviationRun('חכ"א')
                cy.resultsTests('חכמים אומרים')
            })
        })
    
    })
    
})


