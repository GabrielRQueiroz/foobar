import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FormLogin } from './FormLogin'
import { MockNextRouter } from '@/../cypress/utils/router'

describe('<FormLogin />', () => {
  const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})

  
  it('renders', () => {
    cy.mount(
      <MockNextRouter>
        <QueryClientProvider client={queryClient}>
          <FormLogin />
        </QueryClientProvider>
      </MockNextRouter>
    )
  })
})