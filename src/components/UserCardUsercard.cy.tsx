import React from 'react'
import Usercard from './UserCard'


describe('Usercard Component', () => {
	const user = {
		nome: 'John Doe',
		email: 'johndoe@example.com',
		numeroMatches: 5
	}

	it('renders the user card correctly', () => {
		cy.mount(<Usercard {...user} />)

		// Assertion: Verify that the user information is rendered correctly
		cy.contains(`Olá, ${user.nome}!`).should('exist')
		cy.contains(user.email).should('exist')
		cy.contains(`${user.numeroMatches} matches`).should('exist')

		// Assertion: Verify that the profile edit button is rendered
		cy.contains('Editar perfil').should('exist')
	})
})