/// <reference types="cypress"/>

describe('US-012-Funcionalidade; Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')
  });
    it('Deve fazer o cadastro de campos obrigatorios', () => {
      var email = `fabio${Date.now()}@teste.com`
      cy.preencherCadastro('Fabio' , 'Azevedo', email, '11969714929', 'Daga1011@')
      cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
    it.only('Deve validar mensagem de erro com o campo nome inválido', () => {
      cy.preencherCadastro('Fabio20' , 'Azevedo2', 'daniel@teste.com', '11969714929', 'Daga1011@')
      cy.get('#signup-response').should('contain', 'Nome deve conter apenas caracteres alfabético')
    });
})