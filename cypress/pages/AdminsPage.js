class AdminsPage {
  get searchInput() {
    return cy.get('input[placeholder="Search"]');
  }

  get addAdminButton() {
    return cy.contains('button', /^Add admin$/);
  }

  get adminRows() {
    return cy.get('table tbody tr');
  }

  searchAdmin(searchTerm) {
    this.searchInput.should('be.visible').clear().type(String(searchTerm));
  }

  clearSearch() {
    this.searchInput.should('be.visible').clear();
  }

  openAddAdminPage() {
    this.addAdminButton.should('be.visible').click();
  }

  getAdminRowByPhone(phoneNumber) {
    const phone = String(phoneNumber);
    return this.adminRows
      .filter((_, row) => row.innerText.includes(phone))
      .should('have.length', 1);
  }

  openAdminActionsByPhone(phoneNumber) {
    this.getAdminRowByPhone(phoneNumber)
      .find('td')
      .last()
      .find('img.w-5')
      .should('be.visible')
      .click();
  }

  clickEdit() {
    cy.get('.rc-dropdown')
      .should('be.visible')
      .contains('p', /^Edit$/)
      .click();
  }

  clickDeactivate() {
    cy.get('.rc-dropdown')
      .should('be.visible')
      .contains('p', /^Deactivate$/)
      .click();
  }

  verifyAdminExistsByPhone(phoneNumber) {
    this.getAdminRowByPhone(phoneNumber).should('be.visible');
  }

  verifyAdminDoesNotExistByPhone(phoneNumber) {
    this.adminRows.should('not.contain', String(phoneNumber));
  }

  verifyAdminRowByPhone(phoneNumber, expected) {
    this.getAdminRowByPhone(phoneNumber).within(() => {
      if (expected.fullName) cy.root().should('contain.text', expected.fullName);
      if (expected.firstName) cy.root().should('contain.text', expected.firstName);
      if (expected.lastName) cy.root().should('contain.text', expected.lastName);
      if (expected.phoneNumber) cy.root().should('contain.text', expected.phoneNumber);
    });
  }
}

export default new AdminsPage();
