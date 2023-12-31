/// <reference types="cypress" />

import { apiEndpoints } from "../../../src/lib/routes"

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
		cy.wait(500)
		cy.get('[data-cy="submit"]').click()
		cy.wait(3000)
		cy.get('[data-cy="name"]').type(testname, { delay: 150 })
		cy.wait(500)
		cy.get('[data-cy="email"]').type(testemail, { delay: 150 })
		cy.wait(500)
		cy.get('[data-cy="password"]').type('123456', { delay: 150 })
		cy.wait(500)
		cy.get('[data-cy="confirmPassword"').type('123456', { delay: 150 })
		cy.wait(500)
	})

	it('Submit', () => {
		cy.visit('/registro')
		cy.get('[data-cy="name"]').type(testname, { delay: 150 })
		cy.get('[data-cy="email"]').type(testemail, { delay: 150 })
		cy.get('[data-cy="password"]').type('123456', { delay: 150 })
		cy.get('[data-cy="confirmPassword"]').type('123456', { delay: 150 })
		cy.get('[data-cy="submit"]').click()
		cy.intercept(apiEndpoints.BASE_URL).as('postUser')
		cy.wait(3000)
		cy.url().should('include', '/feed')
		cy.wait(5000)
	})

	it('Email already taken', () => {
		cy.visit('/registro')
		cy.get('[data-cy="name"]').type('2' + testname, { delay: 150 })
		cy.get('[data-cy="email"]').type(testemail, { delay: 150 })
		cy.get('[data-cy="password"]').type('123456', { delay: 150 })
		cy.get('[data-cy="confirmPassword"]').type('123456', { delay: 150 })
		cy.get('[data-cy="submit"]').click()
		cy.wait(3000)
		cy.get('[data-cy="email-taked"]').should('be.visible', { delay: 150 })
		cy.wait(10000)
	})

	it('Name already taken', () => {
		cy.visit('/registro')
		cy.get('[data-cy="name"').type(testname, { delay: 150 })
		cy.get('[data-cy="email"').type('2' + testemail, { delay: 150 })
		cy.get('[data-cy="password"').type('123456', { delay: 150 })
		cy.get('[data-cy="confirmPassword"').type('123456', { delay: 150 })
		cy.get('[data-cy="submit"]').click()
		cy.wait(3000)
		cy.get('[data-cy="name-taked"]').should('be.visible')
		cy.wait(10000)
	})
})
