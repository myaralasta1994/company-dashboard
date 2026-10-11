class AddDriverPage {
    get firstNameInput() {
      return cy.get('input[name="FirstName"]')
    }
  
    get lastNameInput() {
      return cy.get('input[name="LastName"]')
    }
  
    get phoneNumberInput() {
      return cy.get('input[name="PhoneNumber"]')
    }
  
    get emergencyNumberInput() {
      return cy.get('input[name="EmergencyNumber"]')
    }
  
    get addressInput() {
      return cy.get('input[name="Address"]')
    }
  
    get nationalNumberInput() {
      return cy.get('input[name="NationalNumber"]')
    }
  
    get saveButton() {
      return cy.contains('button[type="submit"]', 'Save')
    }
  
    fillDriverForm(driver) {
      this.firstNameInput.clear().type(driver.firstName)
      this.lastNameInput.clear().type(driver.lastName)
      this.phoneNumberInput.clear().type(driver.phoneNumber)
      this.emergencyNumberInput.clear().type(driver.emergencyNumber)
      this.addressInput.clear().type(driver.address)
      this.nationalNumberInput.clear().type(driver.nationalNumber)
    }
  
    saveDriver() {
      this.saveButton.click()
    }
  }
  
  export default new AddDriverPage()