import React from 'react'
import { FormRegistro } from './FormRegistro'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MockNextRouter } from '@/../cypress/utils/router'

describe('<FormRegistro />', () => {
 const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	})
  
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <MockNextRouter>
        <QueryClientProvider client={queryClient}>      
          <FormRegistro />
        </QueryClientProvider>    
      </MockNextRouter>
    )
  })
})