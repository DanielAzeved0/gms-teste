/// <reference types="cypress"/>

describe('US-00 : Funcionalidade: Busca de Filmes', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    afterEach(() => {
        cy.screenshot
    })

    it('Deve buscar filme com sucesso', () => {
        cy.get('#search-input').type('The Godfather')
        cy.get('#search-button').click()
        cy.get('#results-section').should('contain', 'The Godfather')
        cy.get('#clear-button')//.cliclk()
    });

    it('Deve buscar filme com sucesso de uam lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[1].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[1].titulo)
        })
    });

    it('Deve buscar filme com sucesso de uam lista', () => {
        cy.fixture('filmes').then((filmes) => {
            cy.get('#search-input').type(filmes[2].titulo)
            cy.get('#search-button').click()
            cy.get('#results-section').should('contain', filmes[2].titulo)
        })
    });
})