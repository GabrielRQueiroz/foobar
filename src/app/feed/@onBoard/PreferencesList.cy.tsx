import { apiEndpoints } from '@/lib/api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PreferencesList } from './PreferencesList'

describe('<PreferencesList />', () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})

	it('renders', () => {
		cy.mount(
			<QueryClientProvider client={queryClient}>
				<PreferencesList />
			</QueryClientProvider>
		)
	})

	it('renders rows with selectable preferences cards properly', () => {
		cy.mount(
			<QueryClientProvider client={queryClient}>
				<PreferencesList />
			</QueryClientProvider>
		)

		cy.intercept('GET', apiEndpoints.GET_ONBOARD_PREFERENCES)

		cy.get('[data-cy="preferences-list"]').children().should('have.lengthOf.within', 6, 32)

		cy.get('[data-cy="preference-card"]').should('have.class', 'card')

		cy.get('[data-cy="submit-btn"]').should('be.disabled')

		cy.get('[data-cy="preference-card-checked"]').first().should('not.be.visible')

		cy.get('[data-cy="preference-card"]').first().click()

		cy.get('[data-cy="preference-card-checked"]').first().should('be.visible')

		cy.get('[data-cy="submit-btn"]').click()

		cy.intercept('POST', apiEndpoints.MUTATE_PREFERENCES)
	})
})
