import { generateRandomNumber } from '../../support/utils'
import AddBusPage from "../../pages/AddBusPage";
import BusesPage from "../../pages/BusesPage";
import HomePage from "../../pages/HomePage";

describe('Test add new bus', () => {
    beforeEach(() => {
        cy.login()
        HomePage.goToBuses()
        BusesPage.goToAddBusPage()

    })
    // for (let i = 0; i < 100; i++) {
    it('should add new buss', () => {
        const busNumber = generateRandomNumber()
        const bus = {
            busNumber: busNumber
        }
        cy.task('saveBus', bus)
        AddBusPage.registrationNumberInput.type(busNumber)

        AddBusPage.busTypeDropdown.click()
        AddBusPage.selectFirstOption()
        AddBusPage.driversDropdown.click()
        AddBusPage.selectFirstOption()
        AddBusPage.selectRandomBus()
        AddBusPage.saveBus()
        BusesPage.searchBusInput
        .should('be.visible')
        .clear()
        .type(`${busNumber}`)
    })
    //}
})