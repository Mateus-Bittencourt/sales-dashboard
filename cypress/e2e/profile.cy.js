describe('Check if Profile Page renders the correct components', () => {
  beforeEach(() => {
    cy.login('loremuser@gmail.com', 'SenhaSegura1@')
    cy.visit('http://localhost:5173/profile')
  })

  it('should display profile form', () => {
    cy.get('form').should('be.visible')
    cy.get('#update-profile').should('be.visible')
    cy.get('#delete-account').should('be.visible')
    cy.get('input[name="name"]').should('be.visible')
    cy.get('input[name="email"]').should('be.visible')
    cy.get('input[name="phone"]').should('be.visible')
  })

  it('should display switch theme button', () =>
    cy.get('#switch-theme').should('be.visible'))

  it('should display logout button and redirect to home', () => {
    cy.get('#logout-button').click()
    cy.url().should('include', '/')
  })
})
