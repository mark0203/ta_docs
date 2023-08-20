describe('Different lighthouse tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('simplest test, no specified thresholds', function () => {
    cy.lighthouse()
  })

  it('should test with some thresholds', function () => {
    cy.lighthouse({
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    })
  })

  it('should verify the lighthouse scores ONLY for performance and first contentful paint', function () {
    cy.lighthouse({
      performance: 85,
      "first-contentful-paint": 2000,
    });
  });

  it('passes options and config to cy.lighthouse directly and outputs a HTML report ', function () => {
    const thresholds = {
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    };

    const lighthouseOptions = {
      artifacts: ['performance', 'accessibility', 'best-practices', 'seo', 'pwa'],
    };

    const lighthouseConfig = {
      settings: { output: "html" },
      extends: "lighthouse:default",
    };

    cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
  });
});