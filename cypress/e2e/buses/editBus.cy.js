import HomePage from '../../pages/HomePage'
import { generateRandomNumber } from '../../support/utils'
import BusesPage from '../../pages/BusesPage'
import AddBusPage from '../../pages/AddBusPage'



describe('edit bus test', () => {

    beforeEach(() => {
        cy.login()
        HomePage.goToBuses()

    })
    it('should edit the previously added bus', () => {
        cy.fixture('bus').then((bus) => {
            const updatedBus = {
                busNumber: generateRandomNumber()
            }
            const registration = bus.busNumber
            BusesPage.searchBusInput.clear().type(registration)
            cy.intercept(
                'GET',
                '**/api/Bus/Get?Name=*'
            ).as('searchBuses')
            cy.wait('@searchBuses')
            BusesPage.optionList.click()
            BusesPage.editButton.click()
            AddBusPage.registrationNumberInput.clear().type(updatedBus.busNumber)
            cy.task('saveBus', updatedBus)
            AddBusPage.saveBus()
            BusesPage.searchBusInput.clear()
                .type(updatedBus.busNumber)

            BusesPage.busRows
                .find('td:first-child')
                .filter((index, cell) => {
                    return cell.innerText.trim() === updatedBus.busNumber
                })
                .should('have.length.at.least', 1)
        })
    })
})