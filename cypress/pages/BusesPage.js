class BusesPage {
    get addBusButton() {
        return cy.contains('button', 'Add bus')
    }
    get searchBusInput() {
        return cy.get('input[placeholder="Search"]')
    }
    get busesTable() {
        return cy.get('table')
    }

    get busRows() {
        return this.busesTable.find('tbody tr')
    }
    get optionList() {
        return cy.get('img[alt="menu"]').eq(0)
    }
    get editButton() {
        return  cy.contains('button', 'Edit')
    }
    get deactivateButton() {
        return  cy.contains('button', 'Deactivate')

    }



    goToAddBusPage() {
        this.addBusButton.click()
    }
}

export default new BusesPage()