import React from 'react'
import FriendsList from './FriendsList'

describe('FriendsList Component', () => {
	const friends = {
		numberOfFriends: 3,
		listOfFriends: ['John', 'Jane', 'David']
	}

	it('renders the friends list correctly', () => {
		cy.mount(<FriendsList {...friends} />)

		// Assertion: Verify that the heading "Lista de amigos" is rendered correctly
		cy.contains('Lista de amigos').should('exist')

		// Assertion: Verify that the number of friends is rendered correctly
		cy.contains(friends.numberOfFriends).should('exist')

		// Assertion: Verify that the list of friends is rendered correctly
		cy.get('.flex.h-fit.items-center').should('have.length', friends.listOfFriends.length)

		// Assertion: Verify that each friend's name is rendered correctly
		friends.listOfFriends.forEach(friend => {
			cy.contains(friend).should('exist')
		})
	})
})
