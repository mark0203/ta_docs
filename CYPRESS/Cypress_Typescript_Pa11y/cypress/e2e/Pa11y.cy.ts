describe('template spec', () => {
  it('simplest test, no specified thresholds', () => {
    cy.visit('/')
    cy.pa11y()
  })
})