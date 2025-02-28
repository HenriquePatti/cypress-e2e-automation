class LoginPage {
    visit(path = '/') {
        cy.visit(path)
        return this
    }

    fillUsername(username) {
        cy.get('[data-test="username"]').type(username)
        return this
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').type(password)
        return this
    }

    clickLogin() {
        cy.get('[data-test="login-button"]').click();
        return this
    }
    
    validateSuccessfulLogin() {
        cy.url().should('include', '/inventory.html');
        cy.get('[data-test="title"]')
            .contains('Products')
            .should('be.visible')
        cy.get('.inventory_list').should('be.visible')
        cy.get('.shopping_cart_link').should('be.visible')
        return this
    }
}
export default new LoginPage()