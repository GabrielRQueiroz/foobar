import { PreferencesCard } from './PreferencesCard';

describe('PreferencesCard Component', () => {
	const preferences = [
		{
			title: 'Action',
			gender: 'Male',
			image: 'action.jpg'
		},
		{
			title: 'Romance',
			gender: 'Female',
			image: 'romance.jpg'
		},
		{
			title: 'Comedy',
			gender: 'Male',
			image: 'comedy.jpg'
		}
	]

	it('renders the heading correctly', () => {
		cy.mount(<PreferencesCard preferences={preferences} />)

		// Assertion: Verify that the heading text is rendered correctly
		cy.contains('Minhas Preferências').should('exist')
	})

	it('renders the "Editar preferências" button correctly', () => {
		cy.mount(<PreferencesCard preferences={preferences} />)

		// Assertion: Verify that the button text is rendered correctly
		cy.contains('Editar preferências').should('exist')

		// Assertion: Verify that the button has the correct styling
		cy.get('button')
			.should('have.class', 'btn')
			.and('have.class', 'w-[10vw]')
			.and('have.class', 'rounded-lg')
			.and('have.class', 'text-[0.8vw]')
			.and('have.class', 'normal-case')
	})

	it('renders the preferences cards correctly', () => {
		cy.mount(<PreferencesCard preferences={preferences} />)

		// Assertion: Verify that the heading is rendered correctly
		cy.contains('Minhas Preferências').should('exist')

		// Assertion: Verify that the "Editar preferências" button is rendered
		cy.contains('Editar preferências').should('exist')

		// Assertion: Verify that the preferences cards are rendered correctly
		cy.get('.card.h-32').should('have.length', preferences.length)
	})
})
