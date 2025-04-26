/// <reference types="cypress"/>

describe('US-012-Funcionalidade; Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type('Daniel')
    cy.get('#signup-lastname').type('Azevedo')
    cy.get('#signup-email').type('ZedaOnça@gmail.com')
    cy.get('#signup-phone').type('11969714929')
    cy.get('#signup-password').type('Daga1011@')
    cy.get('#signup-button').click()
  })
})