describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    const customThresholds = {
      // https://mfrachet.github.io/cypress-audit/guides/lighthouse/api-intro.html
      performance: 50,
      accessibility: 50,
      seo: 70,
      pwa: 30,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 3000,
      'cumulative-layout-shift': 0.1,
      'total-blocking-time': 500,
      "best-practices": 100,
    };

    cy.lighthouse(customThresholds)
  })
})