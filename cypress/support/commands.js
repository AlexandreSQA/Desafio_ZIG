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

import url from './url.js'

Cypress.Commands.add('new_user', (name, email) => {
    cy.visit(url.automatize)
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
})

Cypress.Commands.add('create_user', (password) => {
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').click()
    .type(password)

})
  
Cypress.Commands.add('birth_date', () => {
    cy.get('[data-qa="days"]')
    .its('length').then(n => {
      cy.get('select').eq(0).select(Cypress._.random(n))
    }),

    cy.get('[data-qa="months"]')
    .its('length').then(m => {
      cy.get('select').eq(1).select(Cypress._.random(m))
    }),

        cy.get('[data-qa="years"]')
        .its('length').then(y => {
          cy.get('select').eq(2).select(Cypress._.random(y))
    }) 

        })

    
Cypress.Commands.add('adress_info', (first_name, last_name, company,
     adress1, adress2, state, city, zipcode, mobile_number) => {
    cy.get('[data-qa="first_name"]').type(first_name)
    cy.get('[data-qa="last_name"]').type(last_name)
    cy.get('[data-qa="company"]').type(company)
    cy.get('[data-qa="address"]').type(adress1)
    cy.get('[data-qa="address2"]').type(adress2)

    cy.get('[data-qa="country"]')
    .its('length').then(c => {
      cy.get('select').eq(3).select(Cypress._.random(c))

    cy.get('[data-qa="state"]').type(state)
    cy.get('[data-qa="city"]').type(city)
    cy.get('[data-qa="zipcode"]').type(zipcode)
    cy.get('[data-qa="mobile_number"]').type(mobile_number)
        
})   
})   
    

