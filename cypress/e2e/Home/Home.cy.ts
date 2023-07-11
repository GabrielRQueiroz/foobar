/// <reference types="cypress" />

describe('Landing Page', () => {
	it('Render LP', () => {
		cy.visit('/')
		cy.wait(500)
		cy.get('[data-cy="LP"]').should('be.visible')
		cy.wait(1000)
	})

	it('Text and Images Render', () => {
		cy.visit('/')
		cy.wait(300)
		cy.get('[data-cy="Text-Primary"]')
		cy.get('[data-cy="button"]')
		cy.get('[data-cy="Text-Secondary"]')
		cy.get('[data-cy="Text-Secondary-2"]')
		cy.get('[Emilia-LP"]')
	})

	it('Registro Page Button', () => {
		cy.visit('/')
		cy.wait(300)
		cy.get('[data-cy="button"]').click()
		cy.wait(3000)
		cy.url().should('include', '/registro')
		cy.wait(5000)
	})
})
