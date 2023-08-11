describe(['all'], 'template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.lighthouse()
  })
})