import {faker} from '@faker-js/faker'


describe('abrir o site', () => {
  it('acessar o site automatize', () => {
    cy.visit('automatize')


  })

  it('criar conta', () => {
    cy.new_user(faker.person.fullName(), faker.internet.email())
    cy.get('[data-qa="signup-button"]').click()
    cy.create_user(faker.internet.password()) 
    cy.birth_date()
    cy.get('#newsletter').click()
    cy.adress_info(faker.person.firstName(), faker.person.lastName(),
     faker.company.name(),faker.location.streetAddress(), faker.location.streetAddress(), 
    faker.location.state(), faker.location.city(), faker.location.zipCode(), faker.phone.number())
    cy.get('[data-qa="create-account"]').click()
  })
  
})

