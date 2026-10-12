class AddAdminPage {
  get firstNameInput() { return cy.get('input[name="FirstName"]'); }
  get lastNameInput() { return cy.get('input[name="LastName"]'); }
  get phoneNumberInput() { return cy.get('input[name="PhoneNumber"]'); }
  get passwordInput() { return cy.get('input[name="Password"]'); }
  get roleDropdown() { return cy.get('.react-select__control').first(); }
  get profilePictureInput() { return cy.get('input[aria-label="Upload Profile Picture"]'); }
  get saveButton() { return cy.contains('button', /^Save$/); }
  get cancelButton() { return cy.contains('button', /^Cancel$/); }
  get areaCheckboxes() { return cy.get('input[name="AreaIds"]'); }

  enterFirstName(value) { this.firstNameInput.should('be.visible').clear().type(value); }
  enterLastName(value) { this.lastNameInput.should('be.visible').clear().type(value); }
  enterPhoneNumber(value) { this.phoneNumberInput.should('be.visible').clear().type(String(value)); }
  enterPassword(value) { this.passwordInput.should('be.visible').clear().type(value, { log: false }); }

  selectRole(role) {
    this.roleDropdown.click();
    cy.get('[role="option"]').contains(new RegExp(`^${Cypress._.escapeRegExp(role)}$`)).click();
  }

  uploadProfilePicture(filePath) {
    this.profilePictureInput.selectFile(filePath, { force: true });
  }

  selectAreasByIndex(...indexes) {
    this.areaCheckboxes.then(($checkboxes) => {
      indexes.forEach((index) => {
        if (!$checkboxes[index]) throw new Error(`Area checkbox index ${index} does not exist`);
        cy.wrap($checkboxes[index]).check({ force: true });
      });
    });
  }

  save() { this.saveButton.should('be.enabled').click(); }
  cancel() { this.cancelButton.click(); }
}

export default new AddAdminPage();
