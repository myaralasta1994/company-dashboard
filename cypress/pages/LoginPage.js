class LoginPage {

    visit() {
        cy.visit('/');
    }

    get loginButton(){
        return  cy.contains('button', 'Login')
    }

    login(username, password) {
        cy.get('input[name="Identification"]').clear().type(username);
        cy.get('input[name="Password"]').clear().type(password);
        // cy.get('[data-test="login-button"]').click();
        cy.contains('button', 'Login').click();
    }

    getErrorMessage() {
        return cy.get('[data-test="error"]');
    }
}

export default new LoginPage();