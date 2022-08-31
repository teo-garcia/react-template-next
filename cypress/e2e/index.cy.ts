/**
 * TODO: Fix ESLint issues
 */
/* eslint-disable */
describe('<HomePage /> tests', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.findByText(/nextjs template @1.0.0/i).should('exist')
  })
})
