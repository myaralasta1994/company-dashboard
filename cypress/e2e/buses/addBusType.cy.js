
import AddBusTypePage from '../../pages/AddBusTypePage'
import HomePage from '../../pages/HomePage'
import BusesPage from '../../pages/BusesPage'
import AddBusPage from '../../pages/AddBusPage'

describe('Add Bus Type Tests', () => {
    beforeEach(() => {
        cy.login()
        HomePage.goToBuses()
        BusesPage.goToAddBusPage()
       AddBusPage.openAddBusTypeForm()
    })

    it('should create a bus type successfully', () => {
        const uniqueId = Date.now().toString().slice(-8)

        const layout = {
            name: `TestLayout${uniqueId}`,
            floors: 1,
            horizontalSeats: 4,
            verticalSeats: 10,
        }

        AddBusTypePage.fillFirstFloorLayout(layout)

        AddBusTypePage.nextButton.should('be.enabled')
        AddBusTypePage.clickNext()

        // Complete any remaining steps in the layout wizard.
        AddBusTypePage.saveBusType()
        // Return to the page that displays the bus type cards.

        AddBusTypePage.verifyBusTypeExists(layout.name)
    })

    // it('should delete all bus types with trash icons', () => {
    //     // Scroll through the main content panel in 75 steps.
    //     cy.get('div.overflow-y-auto.overflow-x-hidden')
    //     .first()
    //     .should('exist')
    //     .then(($container) => {
    //     const element = $container[0]
    //     const maxScroll = element.scrollHeight - element.clientHeight

    //         for (let i = 1; i <= 75; i++) {
    //           cy.wrap($container).scrollTo(
    //             0,
    //             (maxScroll * i) / 7,
    //             { duration: 50 }
    //           )
    //         }
    //       })

    //     // Click each remaining trash icon and confirm deletion.
    //     cy.get('img[alt="trash mussafer icon"]')
    //       .should('exist')
    //       .then(($icons) => {
    //         const totalIcons = $icons.length

    //         cy.log(`Found ${totalIcons} trash icons`)

    //         for (let i = 0; i < totalIcons; i++) {
    //           // Re-query the first remaining trash icon each time.
    //           cy.get('img[alt="trash mussafer icon"]')
    //             .first()
    //             .should('exist')
    //             .click({ force: true })

    //           // Wait for the Delete confirmation dialog.
    //           cy.contains(
    //             'p',
    //             'Are you sure you want to delete this item?'
    //           ).should('be.visible')

    //           // Click Yes to confirm deletion.
    //           cy.contains('.box button', 'Yes')
    //             .should('be.visible')
    //             .click()

    //           // Wait for the dialog to close before continuing.
    //           cy.contains(
    //             'p',
    //             'Are you sure you want to delete this item?'
    //           ).should('not.exist')
    //         }
    //       })

    //     })
})
