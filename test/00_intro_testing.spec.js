/**
* Introduction to testing framework (Mocha)
**/
var expect = require('chai').expect;

// documentation for the chai#expect http://chaijs.com/api/bdd/

describe('Introductio to Mocha and WallabyJS', function() {

  // You can disable test by adding an 'x' in front of the runner
  xit('Disable this test', function(){
    var disabled = __;
    expect(disabled).to.be.false;
  });

  // We shall contemplate truth by testing reality, via spec expectations.
  xit('true vs false', function() {
    let truth = __;
    let falsy = __;
    expect(truth).to.be.ok;
    expect(falsy).to.not.be.ok;
  });

  xit('List all the falsy values in JavaScript', function() {
    let falsy = __;
    expect(falsy).to.not.be.ok;
    falsy = __;
    expect(falsy).to.not.be.ok;
    falsy = __;
    expect(falsy).to.not.be.ok;
    falsy = __;
    expect(falsy).to.not.be.ok;
    falsy = __;
    expect(falsy).to.not.be.ok;
  });

  // Expected value versus actual value
  xit('should expect equality', function() {
    let expectedValue = __;
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).to.be.ok;
  });

  // Sometimes you need to be precise about what you "type."
  xit('should assert equality with ===', function() {
    let expectedValue = __;
    let actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).to.equal(expectedValue);
  });
});
