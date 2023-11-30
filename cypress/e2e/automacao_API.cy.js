/// <reference types="cypress" />
import {faker} from '@faker-js/faker'

describe('Teste de API', () => {
  let userData;

  it('Cria e verifica uma conta', () => {
    // Gera dados aleatórios
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    const randomPassword = faker.internet.password();
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomCompany = faker.company.name();
    const randomAddress1 = faker.location.streetAddress();
    const randomAddress2 = faker.location.streetAddress();
    const randomCountry = faker.location.country();
    const randomZipcode = faker.location.zipCode();
    const randomState = faker.location.state();
    const randomCity = faker.location.city();
    const randomMobileNumber = faker.phone.number();

    // Armazena os dados gerados
    userData = {
      name: randomName,
      email: randomEmail,
      password: randomPassword,
      firstName: randomFirstName,
      lastName: randomLastName,
      company: randomCompany,
      address1: randomAddress1,
      address2: randomAddress2,
      country: randomCountry,
      zipCode: randomZipcode,
      state: randomState,
      city: randomCity,
      mobile_number: randomMobileNumber

    };

    // Faz uma requisição POST para criar uma conta
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/createAccount',
      body: [
        {

        name: randomName,
        email: randomEmail,
        password: randomPassword,
        title: 'Mrs',
        birth_date: '27',
        birth_month: 'outubro',
        birth_year: '1995',
        firstname: randomFirstName,
        lastname: randomLastName,
        company: randomCompany,
        address1: randomAddress1,
        address2: randomAddress2,
        country: randomCountry,
        zipcode: randomZipcode,
        state: randomState,
        city: randomCity,
        mobile_number: randomMobileNumber
        }
      ]},
    ).then((response) => {
      // Verifica se a conta foi criada com sucesso
      expect(response.status).to.equal(200);
      //expect(response.body).to.equal("User created");

      // Faz uma requisição POST para verificar o login
      cy.request({
        method: 'POST',
        url: 'https://automationexercise.com/api/verifyLogin',
        body: {
          email: userData.email,
          password: userData.password,
        },
      }).then((loginResponse) => {
        // Verifica se o login foi bem-sucedido
        expect(loginResponse.status).to.equal(200);
      })        
        cy.request({
          method: 'PUT',
          url: 'https://automationexercise.com/api/updateAccount',
       
        body: {
            name: randomName,
            email: userData.email,
            password: userData.password,
            title: 'Mrs',
            birth_date: '27',
            birth_month: 'outubro',
            birth_year: '1995',
            firstname: randomFirstName,
            lastname: randomLastName,
            company: randomCompany,
            address1: randomAddress1,
            address2: randomAddress2,
            country: randomCountry,
            zipcode: randomZipcode,
            state: randomState,
            city: randomCity,
            mobile_number: randomMobileNumber
        },
          })
        .then((updateResponse) => {
          // Verifica se a atualização foi bem-sucedida
          expect(updateResponse.status).to.equal(200);

          // Faz uma requisição GET para obter detalhes
          cy.request({
            method: 'GET',
            url: `https://automationexercise.com/api/getUserDetailByEmail?email=${userData.email}`,
          }).then((getDetailsResponse) => {
            // Verifica se os dados foram atualizados corretamente
            expect(getDetailsResponse.status).to.equal(200);

            // Faz uma requisição DELETE para excluir a conta
            cy.request({
              method: 'DELETE',
              url: 'https://automationexercise.com/api/deleteAccount',
              body: {
                email: userData.email,
                password: userData.password,
              },
            }).then((deleteResponse) => {
              // Verifica se a exclusão foi bem-sucedida
              expect(deleteResponse.status).to.equal(200);
            });
          });
        });
      });
    });
})
