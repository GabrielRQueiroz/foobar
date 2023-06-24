describe('Navigation', () => {
	it('prompt the onboard modal', () => {
		// Start from the index page
		cy.visit('/')

		// if the its the first time the user is visiting the site, the onboard modal should be visible
		cy.get('.modal').should('be.visible')
	})
})
