describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })
  it('passes 2', () => {
    cy.visit('/commands/querying')
  })
  it('passes 3', { tags: 'smoke' }, () => {
    cy.visit('/commands/assertions')
  })
})