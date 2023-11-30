import {faker} from '@faker-js/faker'

describe('Cadastro e Login com Dados Faker', () => {
  it('Realiza o Cadastro e Login', () => {
    // Gera um nome e email aleatórios usando Faker.js
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    // Gera uma senha aleatória usando Faker.js
    const randomPassword = faker.internet.password();

    // Armazena os dados gerados no ambiente Cypress
    Cypress.env('randomUserData', {
      name: randomName,
      email: randomEmail,
      password: randomPassword,
    });

    // Visita a página de cadastro
    cy.visit('https://automationexercise.com/login')

    // Preenche o formulário de cadastro com os dados armazenados
    cy.get('[data-qa="signup-name"]').type(Cypress.env('randomUserData').name);
    cy.get('[data-qa="signup-email"]').type(Cypress.env('randomUserData').email);
    cy.get('[data-qa="signup-button"]').click()
    cy.get('[data-qa="password"]').type(Cypress.env('randomUserData').password);
    cy.birth_date()
    cy.get('#newsletter').click()
    cy.adress_info(faker.person.firstName(), faker.person.lastName(),
     faker.company.name(),faker.location.streetAddress(), faker.location.streetAddress(), 
    faker.location.state(), faker.location.city(), faker.location.zipCode(), faker.phone.number())
    cy.get('[data-qa="create-account"]').click()

    cy.get('[data-qa="continue-button"]').click()
    
    // Realiza o logout 
    cy.get('.shop-menu > .nav > :nth-child(4)').click()

    // Visita a página de login
    cy.visit('https://automationexercise.com/login')

    // Preenche o formulário de login com os dados armazenados
    cy.get('[data-qa="login-email"]').type(Cypress.env('randomUserData').email);
    cy.get('[data-qa="login-password"]').type(Cypress.env('randomUserData').password);
    cy.get('[data-qa="login-button"]').click();

    // Deleta a conta criada
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

    // Clica em continuar e volta para home deslogada
    cy.get('[data-qa="continue-button"]').click()
  });
});