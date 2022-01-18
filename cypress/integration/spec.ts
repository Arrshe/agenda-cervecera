describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('Birrapp')
    cy.contains('¡Regístrate!')
    cy.get('h1').contains('Birrapp');
  })
})
