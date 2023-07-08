import React from 'react'
import LandingPage from './page'

describe('LandingPage', () => {
	it('should exists', () => {
		cy.mount(<LandingPage />)

		// Verify the presence of specific elements
		cy.get('.card').should('exist')
		cy.get('button').should('exist')
		cy.get('p').should('exist')
		cy.get('h1').should('exist')
	})

	it('should render correctly', () => {
		cy.mount(<LandingPage />)

		cy.get('h1').should('have.text', 'Ache sua história')
		cy.get('button').should('have.text', 'Cadastre-se')
		cy.get('p').first().should(
			'have.text',
			'Explore novas e emocionantes experiências cinematográficas, televisivas e literárias com nosso site de match especializado em filmes, séries e livros. Descubra histórias que se encaixam perfeitamente ao seu gosto e mergulhe em um universo de entretenimento personalizado.'
		)
		cy.get('p').last().should('have.text', 'Métodos de Programação - 01/2023')
	})

	it('verifies the link of the button', () => {
		cy.mount(<LandingPage />)

		cy.get('button').find('a').should('have.attr', 'href', '/registro')
	})
})
