// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import LoginPage from "../pages/LoginPage"
import users from '../fixtures/users.json'
import AddBusPage from '../pages/AddBusPage'
import { generateRandomNumber } from './utils'

Cypress.Commands.add('login', () => {
    LoginPage.visit()

    LoginPage.login(
        users.standardUser.username,
        users.standardUser.password
    )
})

Cypress.Commands.add('addRandomBus', () => {

    const busNumber = generateRandomNumber()

    AddBusPage.registrationNumberInput
        .clear()
        .type(busNumber)

    AddBusPage.busTypeDropdown.click()
    AddBusPage.selectFirstOption()

    AddBusPage.driversDropdown.click()
    AddBusPage.selectFirstOption()
    AddBusPage.selectRandomBus()
    AddBusPage.saveBus()

    return cy.wrap(busNumber)
})