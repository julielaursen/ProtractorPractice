// newSpec.js

browser.waitForAngularEnabled(false);

describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('http://phptravels.com/demo');

    expect(browser.getTitle()).toEqual('PHPTRAVELS | Demo');
  });
});