describe('all', 'template spec', () => {
  it(['one'], 'passes', () => {
    cy.visit('/')
  })
  it(['two'], 'passes 2', () => {
    cy.visit('/commands/querying')
  })
  it(['three'], 'passes 3', () => {
    cy.visit('/commands/assertions')
  })
})