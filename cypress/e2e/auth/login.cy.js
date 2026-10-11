import LoginPage from '../../pages/LoginPage';
import users from '../../fixtures/users.json';

describe('Login Tests', () => {

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Normal Login', () => {
        LoginPage.login(
            users.standardUser.username,
            users.standardUser.password

        );
        cy.get('nav[aria-label="breadcrumb"]')
            .should('be.visible')
            .and('contain.text', 'Overview')
    });



    afterEach(function () {
        if (this.currentTest.state === 'failed') {
            cy.screenshot(`failure-${this.currentTest.title}`);
        }
    });
});
