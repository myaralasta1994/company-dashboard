import DriversPage from '../../pages/DriversPage'
import HomePage from '../../pages/HomePage'

describe('Search Driver Tests', () => {

    beforeEach(() => {
        cy.login()
        HomePage.goToDrivers()
    })

    it('should find a driver by exact name', () => {
        cy.fixture('driver').then((driver) => {
            const driverPhoneNumber = driver.phoneNumber

            cy.intercept('GET', '**/api/Driver/Get*')
                .as('searchDrivers')

            DriversPage.searchDriver(driverPhoneNumber)

            cy.wait('@searchDrivers')

            DriversPage.getDriverRow(driverPhoneNumber)
            .should('have.length.at.least', 1)
            .first()
            .find('td')
            .eq(1)
            .should('contain.text', driverPhoneNumber)
        })
    })
})