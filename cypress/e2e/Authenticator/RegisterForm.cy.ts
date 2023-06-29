/// <reference types="cypress" />

const uuid = () => Cypress._.random(0, 1e6)
const id = uuid()
const testname = `testname${id}`
const testemail = `testemail${id}@hotmail.com`

describe('Check the registration page', () => {
	it('It should load the page and test the viewports', () => {
		cy.visit('/registro')
		cy.viewport('macbook-15')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('be.visible')
		cy.wait(1000)
		cy.viewport('macbook-13')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('be.visible')
		cy.wait(1000)
		cy.viewport('macbook-11')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('be.visible')
		cy.wait(1000)
		cy.viewport('ipad-2')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('ipad-mini')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('iphone-6+')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('iphone-6')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('iphone-5')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Emilia"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('macbook-15')
	})

	it('Empty submit', () => {
		cy.visit('/registro')
		cy.get('[data-cy="submit"]').click()
		cy.wait(3000)
		cy.get('[data-cy="name"').type(testname)
		cy.wait(500)
		cy.get('[data-cy="email"').type(testemail)
		cy.wait(500)
		cy.get('[data-cy="password"').type('123456')
		cy.wait(500)
		cy.get('[data-cy="confirmPassword"').type('123456', { delay: 150 })
		cy.wait(500)
	})

	it('submit', () => {
		cy.visit('/registro')
		cy.get('[data-cy="name"').type(testname)
		cy.get('[data-cy="email"').type(testemail)
		cy.get('[data-cy="password"').type('123456')
		cy.get('[data-cy="confirmPassword"').type('123456')
		cy.get('[data-cy="submit"]').click()
		cy.wait(500)
	})
})
