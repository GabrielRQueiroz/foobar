/// <reference types="cypress" />

import { apiEndpoints } from "../../../src/lib/routes"

const testEmailLogin = `may3@gmail.com`
const testPassword = `123456`

describe('Check the registration page', () => {
	it('It should load the page and test the viewports', () => {
		cy.visit('/login')
		cy.viewport('macbook-15')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('be.visible')
		cy.wait(1000)
		cy.viewport('macbook-13')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('be.visible')
		cy.wait(1000)
		cy.viewport('macbook-11')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('be.visible')
		cy.wait(1000)
		cy.viewport('ipad-2')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('ipad-mini')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('iphone-6+')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('iphone-6')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('iphone-5')
		cy.get('[data-cy="Form"]').should('be.visible')
		cy.get('[data-cy="Subaru"]').should('not.be.visible')
		cy.wait(1000)
		cy.viewport('macbook-15')
	})

	it('Empty submit', () => {
		cy.visit('/login')
		cy.wait(500)
		cy.get('[data-cy="submit"]').click()
		cy.wait(3000)
		cy.get('[data-cy="email"]').type(testEmailLogin, { delay: 150 })
		cy.wait(500)
		cy.get('[data-cy="password"]').type(testPassword, { delay: 150 })
		cy.wait(500)
	})

	it('Submit', () => {
		cy.visit('/login')
		cy.wait(500)
		cy.get('[data-cy="email"]').type(testEmailLogin, { delay: 150 })
		cy.get('[data-cy="password"]').type(testPassword, { delay: 150 })
		cy.get('[data-cy="submit"]').click()
		cy.intercept(apiEndpoints.BASE_URL).as('postUser')
		cy.wait(3000)
		cy.url().should('include', '/feed')
		cy.wait(5000)
	})

	it('Email or password failed', () => {
		cy.visit('/login')
		cy.wait(500)
		cy.get('[data-cy="email"]').type(testEmailLogin, { delay: 150 })
		cy.get('[data-cy="password"]').type(testPassword + '1', { delay: 150 })
		cy.get('[data-cy="submit"]').click()
		cy.wait(3000)
		cy.get('[data-cy="failed-login"]').should('be.visible', { delay: 150 })
		cy.wait(10000)
	})
})
