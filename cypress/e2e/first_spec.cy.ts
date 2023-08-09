describe(['all']. 'template spec', () => {
  it(['test1'], 'passes', () => {
    cy.visit('/')
  })
  it(['test2']. 'passes 2', () => {
    cy.visit('/commands/querying')
  })
  it(['test3'], 'passes 3', () => {
    cy.visit('/commands/assertions')
  })
})