// Nessa página estão os comandos que irão executar as ações dentro da aplicação
// Todos os dados para criação de conta de usuário estão sendo preenchidos aleatoriamente 
// através do faker-js, que permite criar massa de testes sempre nova.
// Os campos do tipo dropdown também serão preenchidos aleatoriamente, de forma que serão 
// salvos seus dados em uma variável declarada e em seguida sorteado randomicamente durante 
// o preenchimento do formulário.
// Obs: nesse momento não tem uma regra definindo valor limite de idade para criação de
// conta na aplicação, sendo assim o teste não validará valor limite para idade, mas é possível
// definir futuramente e barrar a criação de conta para idades fora dos valores definidos.

import url from './url.js'

// comando que irá abrir a url do site e preencher a primeira janela de nome e email
Cypress.Commands.add('new_user', (name, email) => {
    cy.visit(url.automatize)
    cy.get('[data-qa="signup-name"]').type(name)
    cy.get('[data-qa="signup-email"]').type(email)
})
// comando que irá gerar uma senha aleatória ja na segunda tela, nessa tela a aplicação exibe os dados
// preenchidos na tela anterior
Cypress.Commands.add('create_user', (password) => {
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').click()
    .type(password)

})
// criação das seleções randomicas de datas, por termos mais de um campo que utiliza o select
// do cypress, é preciso definir a posição do campo que estamos setado (.eq(posição))  
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

// preenchimento da segunda parte do fomulário de cadastro, aqui todos os outros campos estão
// setados, com sua varíavel já criada, e serão utilizados no arquiv create_account.cy.js 
// para geração de massa com o faker-js    
Cypress.Commands.add('adress_info', (first_name, last_name, company,
     adress1, adress2, state, city, zipcode, mobile_number) => {
    cy.get('[data-qa="first_name"]').type(first_name)
    cy.get('[data-qa="last_name"]').type(last_name)
    cy.get('[data-qa="company"]').type(company)
    cy.get('[data-qa="address"]').type(adress1)
    cy.get('[data-qa="address2"]').type(adress2)

    // os 4 campos do tipo dropdown seguem a ordenação padrão de programação, sendo assim
    // declaramos a sua possição a partir do 0, sendo 0 a primeira posição até a ultima, que
    // nesse caso foi o .eq(3)
    cy.get('[data-qa="country"]')
    .its('length').then(c => {
      cy.get('select').eq(3).select(Cypress._.random(c))

    cy.get('[data-qa="state"]').type(state)
    cy.get('[data-qa="city"]').type(city)
    cy.get('[data-qa="zipcode"]').type(zipcode)
    cy.get('[data-qa="mobile_number"]').type(mobile_number)
        
})   
})


    

