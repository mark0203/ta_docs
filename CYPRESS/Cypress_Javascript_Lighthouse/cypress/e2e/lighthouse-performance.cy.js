describe('Different lighthouse tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('simplest test, no specified thresholds', () => {
    cy.lighthouse()
  })

  it('should test with some thresholds and a desktop config', () => {
    cy.lighthouse({
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    },
    {
      formFactor: "desktop",
      screenEmulation: {
        width: 1350,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
    },)
  })

  it('should verify the lighthouse scores ONLY for performance and first contentful paint', () => {
    cy.lighthouse({
      performance: 85,
      "first-contentful-paint": 2000,
    });
  });

  it('should pass options and config to cy.lighthouse directly and outputs a HTML report ', () => {
    const thresholds = {
      performance: 85,
      accessibility: 100,
      "best-practices": 85,
      seo: 85,
      pwa: 100,
    };

    const lighthouseOptions = {
      formFactor: "desktop",
      screenEmulation: {
        width: 1350,
        height: 940,
        deviceScaleRatio: 1,
        mobile: false,
        disable: false,
      },
    };

    const lighthouseConfig = {
      settings: { output: "html" },
      extends: "lighthouse:default",
    };

    cy.lighthouse(thresholds, lighthouseOptions, lighthouseConfig);
  });
});