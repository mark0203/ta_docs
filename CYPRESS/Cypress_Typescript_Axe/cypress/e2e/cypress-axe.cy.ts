function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

describe('Cypress-axe example', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })

  // Basic usage
  it('Has no detectable a11y violations on load', () => {
    // Test the page at initial load
    cy.checkA11y()
  })

  // Applying a context and run parameters
  it('Has no detectable a11y violations on load (with custom parameters)', () => {
    // Test the page at initial load (with context and options)
    cy.checkA11y('.navbar', {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa']
      }
    })
  })

  it('Has no detectable a11y violations on load (filtering to only include critical impact violations)', () => {
    // Test on initial load, only report and assert for critical impact items
    cy.checkA11y(null, {
      includedImpacts: ['critical']
    })
  })

  // Basic usage after interacting with the page
  it('Has no a11y violations after button click', () => {
    // Interact with the page, then check for a11y issues
    cy.get('.caret').click()
    cy.get('.dropdown-menu a').first().click()
    cy.checkA11y()
  })

  it('Only logs a11y violations while allowing the test to pass', () => {
    // Do not fail the test when there are accessibility failures
    cy.checkA11y(null, null, null, true)
  })

  it('Has no a11y violations after asynchronous load', () => {
    // Retry the check if there are initial failures
    cy.checkA11y(null, {
      retries: 3,
      interval: 100
    })
  })

  it('Logs violations to the terminal', () => {
    cy.checkA11y(null, null, terminalLog)
  })

  it('Logs wcag2a and wcag2aa violations to the terminal', () => {
    cy.checkA11y(
      null,
      {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa'],
        },
      },
      terminalLog
    )
  })
})