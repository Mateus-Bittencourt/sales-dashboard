describe('Check if Leads Page renders the correct components', () => {
  beforeEach(() => {
    cy.login('loremuser@gmail.com', 'SenhaSegura1@')
    cy.visit('http://localhost:5173/leads')
  })

  it('should display leads form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[name="name"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="phone"]').should('be.visible')
    cy.get('#add-lead').should('be.visible')
  })

  it('should display leads card', () =>
    cy.get('#leads-card').should('be.visible'))
})
