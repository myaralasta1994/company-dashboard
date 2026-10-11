class HomePage {

    // =========================
    // Navigation
    // =========================

    get reservationsLink() {
        return cy.contains('Reservations')
    }

    get homeLink() {
        return cy.contains('Home')
    }

    get profileLink() {
        return cy.contains('Profile')
    }

    get profileMenu() {
        return cy.get('.inline-block > .iconWrapper')
    }
    get logout(){
        return cy.contains('p', 'Logout').parent()
    }
    get confirmLogoutButton(){
        return cy.contains('button', 'Yes')
    }
    get buses(){
        return cy.contains('Buses')
    }
    get drivers(){
        return cy.contains('Drivers')
    }

    // =========================
    // Navigation Actions
    // =========================

    goToReservations() {
        this.reservationsLink.click()
    }
    goToBuses(){
        this.buses.should('be.visible').click()
    }
    goToDrivers(){
        this.drivers.should('be.visible').click()
    }

    goToHome() {
        this.homeLink.click()
    }

    goToProfile() {
        this.profileLink.click()
    }

    openProfileMenu() {
        this.profileMenu.click()
    }
    logoutClick(){
        this.logout.click()
    }

    confirmLogout() {
        this.confirmLogoutButton.click()
    }

    // =========================
    // Assertions
    // =========================

    verifyHomePageIsDisplayed() {
        this.homeLink.should('be.visible')
    }
}

export default new HomePage()