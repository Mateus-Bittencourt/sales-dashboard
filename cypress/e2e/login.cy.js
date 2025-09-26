describe('Login Flow Correct Credentials', () => {
  beforeEach(() => cy.visit('http://localhost:5173/login'))

  it('should display the login form', () => cy.get('form').should('be.visible'))

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('loremuser@gmail.com')
    cy.get('input[type="password"]').type('SenhaSegura1@')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login Flow Incorrect Credentials', () => {
  beforeEach(() => cy.visit('http://localhost:5173/login'))

  it('should display an error message with invalid credentials', () => {
    cy.get('input[type="email"]').type('invaliduser@gmail.com')
    cy.get('input[type="password"]').type('InvalidPassword1@')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid password/email').should('be.visible')
    cy.url().should('include', '/login')
  })
})
