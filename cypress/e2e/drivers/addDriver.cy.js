
import DriversPage from '../../pages/DriversPage'
import AddDriverPage from '../../pages/AddDriverPage'
import HomePage from '../../pages/HomePage'
import { generateRandomNumber } from '../../support/utils'


describe('Add Driver Tests', () => {
  beforeEach(() => {
    cy.login()
    HomePage.goToDrivers()
  })

  it('should add a new driver successfully', () => {
    const uniqueId = generateRandomNumber().toString().slice(-8)

    const driver = {
      firstName: `Test`,
      lastName: 'Driver',
      phoneNumber: `09${uniqueId}`,
      emergencyNumber: `09${uniqueId}`,
      address: `Test Address ${uniqueId}`,
      nationalNumber: uniqueId
    }
    cy.task('saveDriver', driver)

    DriversPage.openAddDriverPage()

    AddDriverPage.fillDriverForm(driver)
    DriversPage.uploadProfilePicture()
    DriversPage.verifyProfilePictureUploaded()
    AddDriverPage.saveDriver()

    // Assumes saving returns to the driver list.
    DriversPage.searchDriverInput
      .should('be.visible')
      .clear()
      .type(`${driver.phoneNumber}`)

    DriversPage.getDriverRow(`${driver.firstName} ${driver.lastName}`)
      .should('have.length.at.least', 1)
  })
})
