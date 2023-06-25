import { PreferencesList } from './PreferencesList'

describe('<PreferencesList />', () => {
	it('renders', () => {
		cy.mount(<PreferencesList />)
	})

	it('renders rows with selectable preferences cards properly', () => {
		cy.mount(<PreferencesList />)

		cy.get('[data-cy="preferences-list"]').children().should('have.lengthOf.within', 6, 32)

		cy.get('[data-cy="preference-card"]').should('have.class', 'card').and("have.class", "aspect-square")

		cy.get('[data-cy="preference-card"]').click()

		cy.get('[data-cy="preference-card-checked"]').should('be.visible')
	})
})
