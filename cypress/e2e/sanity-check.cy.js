describe('Sanity Check - Cypress Installation', () => {
  it('should load the SauceDemo page and validate login window elements', () => {
    cy.visit('https://www.saucedemo.com')

    cy.title().should('eq', 'Swag Labs')

    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="username"]').should('have.value', '');

    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="password"]').should('have.value', '');

    cy.get('[data-test="login-button"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('not.be.disabled');  
  })
})