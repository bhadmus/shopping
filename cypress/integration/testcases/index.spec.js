/// <reference types="Cypress" />

context('Create a guest journey on konga', () => {

    it('Start from a random search', ()=>{

        //Launch the shopping site 

        cy.visit('/')

        //Search for Politics
        cy.get('.f6ed2_25oVd #jsSearchInput').type('politics')

        //Click search icon
        cy.get('.f6ed2_25oVd button').click()

        //Selct a price range
        cy.get(':nth-child(3) > .ec98e_ZsoHv > .da38b_1ixZ1 > :nth-child(2) > ._41bb1_2mCF_ > label').click()

        //Verify that the sort by is there
        cy.get('.d0efc_IQ7Z9 span').contains('Sort By').should('be.visible')

        //Verify that Search results is visible
        cy.get('[name="breadcrumbItem"] > a').contains('Search results').should('be.visible')
        
        //Select a book
        cy.get('[href="/product/the-nigerian-revolution-and-the-biafran-war-by-alexander-a-madiebo-4441956"] > .af885_1iPzH > h3').click()

        //Verify that 'Sold by' is visible
        //cy.get('._835ed_2kqSg > span').contains('Sold by').should('be.visible')

        //Add to Cart
        cy.get('._7bc9f_Ef1Zw > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        //Verify that 'Continue to Checkout' is visible
        cy.get('.f082d_safAL > ._2aac2_3bwnD > ._0a08a_3czMG').contains('Continue to Checkout').should('be.visible')

        //Click the 'Continue to Checkout' button
        cy.get('.f082d_safAL > ._2aac2_3bwnD > ._0a08a_3czMG').click()

        //Verify that the Konga logo is visible
        cy.get('.b72ce_21mjc > .f5e10_VzEXF').should('be.visible')

        //Verify that 'Login' button is visible
        cy.get('._0a08a_3czMG').contains('Login').should('be.visible')

        //Verify that 'Sign Up' button is visible
        cy.get('.a5075_16PDh').contains('Create an Account').should('be.visible')



    })
  
  })