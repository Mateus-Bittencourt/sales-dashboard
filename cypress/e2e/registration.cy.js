describe('Check if create profile page renders the correct components', () => {
  beforeEach(() => cy.visit('http://localhost:5173/registration'))

  it('step 1 and 2 should be working', () => {
    cy.get('input[name="name"]').type('Lorem User')
    cy.get('input[name="email"]').type('loremuser@gmail.com')
    cy.get('input[name="phone"]').type('19988886666')
    cy.get('button[type="submit"]').click()
    cy.get('input[name="password"]').type('SenhaSegura1@')
    cy.get('button[type="submit"]').should('be.enabled')
  })
})
