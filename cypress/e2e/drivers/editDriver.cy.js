
import DriversPage from '../../pages/DriversPage'
import EditDriverPage from '../../pages/EditDriverPage'
import HomePage from '../../pages/HomePage'
import { generateRandomNumber } from '../../support/utils'


describe('Edit Driver Tests', () => {
  beforeEach(() => {
    cy.login()
    HomePage.goToDrivers()
  })


  it('should edit the previously added driver', () => {
    cy.fixture('driver').then((driver) => {
      const uniqueId = generateRandomNumber().toString().slice(-8)
      const driverPhoneNumber = `${driver.phoneNumber}`
      const updatedDriver = {
        firstName: `EditedDriver`,
        lastName: 'UpdatedDriver',
        phoneNumber: `09${uniqueId}`,
        emergencyNumber: `09${uniqueId}`,
        address: `Updated Address ${uniqueId}`,
        nationalNumber: uniqueId,
      }

      DriversPage.searchDriver(driverPhoneNumber)

      DriversPage.getDriverRow(driverPhoneNumber)
        .should('have.length.at.least', 1)

      DriversPage.openDriverMenu(driverPhoneNumber)
      DriversPage.clickEditDriver()

      EditDriverPage.updateDriver(updatedDriver)
      cy.task('saveDriver', updatedDriver)
      EditDriverPage.saveChanges()

      
      DriversPage.searchDriver(updatedDriver.phoneNumber)
      DriversPage.getDriverRow(updatedDriver.firstName)
      .should('have.length.at.least', 1)
      .first()
      .within(() => {
        cy.get('td').eq(0).should('contain.text', updatedDriver.firstName)
        cy.get('td').eq(1).should('contain.text', updatedDriver.phoneNumber)
        cy.get('td').eq(2).should('contain.text', updatedDriver.emergencyNumber)
        cy.get('td').eq(3).should('contain.text', updatedDriver.address)
      })
    })
  })

})
