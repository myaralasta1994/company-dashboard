class DriversPage {
    // Search
    get searchDriverInput() {
        return cy.get('input[placeholder="Search"]')
    }

    // Add driver
    get addDriverButton() {
        return cy.contains('button', 'Add driver')
    }

    // Table
    get driversTable() {
        return cy.get('table')
    }

    get driverRows() {
        return this.driversTable.find('tbody tr')
    }
    get profilePictureInput() {
        return cy.get('input[type="file"]')
    }
    get profilePicturePreview() {
        return cy.get('img[alt="Preview"]')
      }

    // Row action menu (three dots)
    openDriverMenu(rowIndex) {
        this.driverRows
            .eq(rowIndex)
            .find('td')
            .last()
            .find('img')
            .click()
    }

    // Find a driver row by visible name
    getDriverRow(driverName) {
        return this.driverRows.filter((index, row) => {
            return row.innerText.includes(driverName)
        })
    }

    // Actions
    openAddDriverPage() {
        this.addDriverButton.click()
    }

    searchDriver(driverName) {
        this.searchDriverInput
            .clear()
            .type(driverName)
    }
    openDriverMenu(driverName) {
        this.getDriverRow(driverName)
            .find('td')
            .last()
            .find('img')
            .click()
    }

    clickEditDriver() {
        cy.get('.rc-dropdown')
            .should('be.visible')
            .find('img[alt="Edit"]')
            .click()
    }


    uploadProfilePicture(fileName = 'driver-profile.jpg') {
        this.profilePictureInput
        .selectFile(`cypress/fixtures/${fileName}`, { force: true })
    }
    verifyProfilePictureUploaded() {
        this.profilePicturePreview
          .should('be.visible')
          .and('have.attr', 'src')
          .and('include', 'blob:')
      }
}

export default new DriversPage()