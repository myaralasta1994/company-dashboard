import AddBusPage from "../../pages/AddBusPage";
import BusesPage from "../../pages/BusesPage";
import HomePage from "../../pages/HomePage";

describe('search for a certin field and value test', () => {
    beforeEach(() => {
        cy.login()
        HomePage.goToBuses()
    })

    it('should find the exact registration number', () => {
        cy.fixture('bus').then((bus) => {
            const registration = bus.busNumber
            cy.intercept(
                'GET',
                '**/api/Bus/Get?Name=*'
            ).as('searchBuses')
            BusesPage.searchBusInput
                .clear()
                .type(registration)
            cy.wait('@searchBuses')
            BusesPage.busRows
                .find('td:first-child')
                .filter((index, cell) => {
                    return cell.innerText.trim() === registration
                })
                .should('have.length.at.least', 1)

        })

    })
})