describe('template spec', () => {
  it('snapshot of whole page', () => {
    cy.visit('/')
    cy.matchImage()
  })
  it('compare against reference-image', () => {
    cy.visit('/')
    cy.matchImage({matchAgainstPath: 'cypress/snapshots/reference-image.png'})
  })
  it('only screenshot a single html component', () => {
    cy.visit('/')
    cy.get('.navbar').matchImage({matchAgainstPath: 'cypress/snapshots/navbar.png'})
  })
  it('blackout part of the screenshot', () => {
    cy.visit('/')
    cy.get('.banner').matchImage({
      screenshotConfig: {
        blackout: ['a']
      },
      matchAgainstPath: 'cypress/snapshots/navbar-with-blackout-section.png'
    })
  })
})