import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";

describe('Logout Tests', () => {

    beforeEach(() => {
        cy.login()
    })
    it('Logout', () => {
        HomePage.openProfileMenu()
        HomePage.logoutClick()
        HomePage.confirmLogout()
        LoginPage.loginButton.should('exist')
    });

});