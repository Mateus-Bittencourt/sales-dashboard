describe('Check if Home Page renders the correct components', () => {
  beforeEach(() => {
    cy.login('loremuser@gmail.com', 'SenhaSegura1@')
    cy.visit('http://localhost:5173/home')
  })

  it('should display total sales', () =>
    cy.get('#total-sales').should('be.visible'))

  it('should display goal of the month', () =>
    cy.get('#goal-of-the-month').should('be.visible'))

  it('should display leads contacted', () =>
    cy.get('#leads-contacted').should('be.visible'))

  it('should display sales by month chart', () =>
    cy.get('#sales-by-month').should('be.visible'))

  it('should display top sales stars', () =>
    cy.get('#top-sales-stars').should('be.visible'))

  it('should display relevant news', () =>
    cy.get('#relevant-news').should('be.visible'))

  it('should display sales per month chart', () =>
    cy.get('#sales-per-month').should('be.visible'))
})
