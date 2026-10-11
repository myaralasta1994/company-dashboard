class AddBusPage {
    get registrationNumberInput() {
        return cy.get('#RegistrationNumber')
    }

    get busTypeDropdown() {
        return cy.contains('.react-select__placeholder', 'Bus type')
            .closest('.react-select__control')
    }

    get driversDropdown() {
        return cy.contains('.react-select__placeholder', 'Drivers')
            .closest('.react-select__control')
    }
    get busCards() {
        return cy.get('h4').closest('.rounded-2xl')
    }
    get addBusTypeButton() {
        return cy.contains('div.cursor-pointer', 'Add bus type')
      }

      openAddBusTypeForm() {
        this.addBusTypeButton
          .should('be.visible')
          .click()
      }

    selectFirstOption() {
        cy.get('[role="option"]')
            .first()
            .click()
    }

    get busCards() {
        return cy.get('h4').closest('.rounded-2xl')
    }

    get saveButton() {
        return cy.contains('button[type="submit"]', 'Save')
    }






    saveBus() {
        this.saveButton.click()
    }

    selectRandomBus() {
        this.busCards.then($cards => {
            const randomIndex = Math.floor(Math.random() * $cards.length)

            cy.wrap($cards)
                .eq(randomIndex)
                .find('button[type="button"]')
                .first()
                .click()
        })
    }

}
export default new AddBusPage()
