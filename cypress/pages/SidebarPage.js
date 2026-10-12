class SidebarPage {
  openAdminsPage() {
    cy.contains('a, button, [role="button"]', /^Admins$/)
      .should('be.visible')
      .click();
    cy.get('input[placeholder="Search"]').should('be.visible');
  }
}

export default new SidebarPage();
