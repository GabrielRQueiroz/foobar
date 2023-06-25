import { PreferencesList } from './PreferencesList'

describe('<PreferencesList />', () => {
	it('renders', () => {
		cy.mount(<PreferencesList />)
	})

	it('renders rows with selectable preferences cards properly', () => {
		cy.mount(<PreferencesList />)
		cy.get('[data-cy=preference-card]').should('have.class', 'card').and("have.attr", 'key').and('have.lengthOf.within', 6, 32)
	})
})
