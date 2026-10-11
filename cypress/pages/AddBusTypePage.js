
class AddBusTypePage {
    get layoutNameInput() {
        return cy.get('input[name="Name"]')
    }

    get numberOfFloorsInput() {
        return cy.get('input[name="floor"]')
    }

    get horizontalSeatsInput() {
        return cy.get('input[name="Settings.0.X"]')
    }

    get verticalSeatsInput() {
        return cy.get('input[name="Settings.0.Y"]')
    }

    get nextButton() {
        return cy.contains('button[type="submit"]', 'Next')
    }

    get saveButton() {
        return cy.contains('button[type="submit"]', 'Save')
    }

    fillFirstFloorLayout(layout) {
        this.layoutNameInput.clear().type(layout.name)
        this.numberOfFloorsInput.clear().type(String(layout.floors))
        this.horizontalSeatsInput.clear().type(String(layout.horizontalSeats))
        this.verticalSeatsInput.clear().type(String(layout.verticalSeats))
    }

    clickNext() {
        this.nextButton.should('be.enabled').click()
    }

    saveBusType() {
        this.saveButton
            .should('be.visible')
            .and('be.enabled')
            .click()
    }
    verifyBusTypeExists(busTypeName) {
        cy.get('div.overflow-y-auto.overflow-x-hidden')
        .first()
        .should('exist')
        .then(($container) => {
        const element = $container[0]
        const maxScroll = element.scrollHeight - element.clientHeight
        
          // Scroll down in 75 steps.
          for (let i = 1; i <= 75; i++) {
            cy.wrap($container).scrollTo(
              0,
              (maxScroll * i) / 7,
              { duration: 50 }
            )
          }
        })
        
        // Find the new bus type card.
        cy.contains('h4', busTypeName, { timeout: 10000 })
        .should('exist')
        .scrollIntoView()
        .should('be.visible')
        .closest('div.rounded-2xl')
        
        // Click the custom radio button.
        .find('div.rounded-full')
        .first()
        .click({ force: true })
        
        }
}



export default new AddBusTypePage()
