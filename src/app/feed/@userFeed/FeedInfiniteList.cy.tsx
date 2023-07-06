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

      cy.intercept('GET', apiEndpoints.GET_BOOK_INDEX)

      cy.get('[data-cy="feed-card"]').each(
         (card) => {
            cy.wrap(card).should('have.class', 'card')
         }
      )
   })

   it('renders a list of anchor cards for movies', () => {
      cy.mount(
         <QueryClientProvider client={queryClient}>
            <FeedInfiniteList />
         </QueryClientProvider>
      )

      cy.intercept('GET', apiEndpoints.GET_MOVIE_INDEX)

      cy.get('[data-cy="feed-card"]').each(
         (card) => {
            cy.wrap(card).should('have.class', 'card')
         }
      )
   })

   it('renders a list of anchor cards for shows', () => {
      cy.mount(
         <QueryClientProvider client={queryClient}>
            <FeedInfiniteList />
         </QueryClientProvider>
      )

      cy.intercept('GET', apiEndpoints.GET_SHOW_INDEX)

      cy.get('[data-cy="feed-card"]').each(
         (card) => {
            cy.wrap(card).should('have.class', 'card')
         }
      )
   }) 
})