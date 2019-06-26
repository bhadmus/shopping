/// <reference types="Cypress" />

context('Create a guest journey on konga', () => {

    it('Start from a random search', ()=>{

        //Launch the shopping site 

        cy.visit('/')

        //Search for Sneakers
        cy.get('.f6ed2_25oVd #jsSearchInput').type('Sneakers')

        //Click search icon
        cy.get('.f6ed2_25oVd button').click()

        //Selct a price range
        cy.get('._7d295_SvW4q .e27b2_1kz0Y:nth-of-type(3) li:nth-of-type(4) label').click()
        
        //Verify that the sort by is there
        cy.get('.d0efc_IQ7Z9 span').contains('Sort By').should('be.visible')

        //Verify that Search results is visible
        cy.get('[name="breadcrumbItem"] > a').contains('Search results').should('be.visible')
        
        //Select a sneaker
        cy.get('[href="/product/avia-running-shoes-3653998"] > picture > ._206b4_1rr8y').click()

        //Verify that 'Sold by' is visible
        //cy.get('._835ed_2kqSg > span').contains('Sold by').should('be.visible')

        //Add to Cart
        cy.get('._7bc9f_Ef1Zw > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        //Verify that 'Continue to Checkout' is visible
        cy.get('.f082d_safAL > ._2aac2_3bwnD > ._0a08a_3czMG').contains('Continue to Checkout').should('be.visible')

        //Click the 'Continue to Checkout' button
        cy.get('.f082d_safAL > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        //Verify that the Konga logo is visible
        cy.get('.b72ce_21mjc > ._206b4_1rr8y').should('be.visible')

        //Verify that 'Login' button is visible
        cy.get('._0a08a_3czMG').contains('Login').should('be.visible')

        //Verify that 'Sign Up' button is visible
        cy.get('.a5075_16PDh').contains('Create an Account').should('be.visible')



    })
  
  })