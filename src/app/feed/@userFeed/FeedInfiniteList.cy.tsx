import { apiEndpoints } from '@/lib/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FeedInfiniteList } from './FeedInfiniteList'

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
				<FeedInfiniteList />
			</QueryClientProvider>
		)
	})

   it('renders a list of anchor cards for books', () => {
      cy.mount(
         <QueryClientProvider client={queryClient}>
            <FeedInfiniteList />
         </QueryClientProvider>
      )

      cy.intercept('GET', apiEndpoints.GET_PREFERENCES)

      cy.get('[data-cy="feed-card"]').each(
         (card) => {
            cy.wrap(card).should('have.class', 'card')
            
            cy.wrap(card).find('[data-cy="feed-card-image"]').should('exist')
         }
      )
   })
})