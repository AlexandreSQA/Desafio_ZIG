// nesse arquivo teremos, resumidamente, as funcionalidades do teste, assim como a ordem
// de criação de massa de testes fake, por isso é necessário importar o faker-js conforme a 
//próxima linha
import {faker} from '@faker-js/faker'

// Descrição do teste e abertura do site através da ferramenta cypress
describe('criar conta no site automatize', () => {
  it('acessar o site automatize', () => {
    cy.visit('https://automationexercise.com/login')


  })
// chamada dos comandos criados no arquivo commands.js e geração da massa de teste fake
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
// para dar continuidade no desafio, após criar a conta, a automação irá realizar logout no sistema,
// dando continuidade a partir do arquivo login.cy.js
    cy.get('[data-qa="continue-button"]').click()
    cy.get('.shop-menu > .nav > :nth-child(4)').click()
  })  
    
  })




