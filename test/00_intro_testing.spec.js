const expect = require('chai').expect;

// documentation for the chai#expect http://chaijs.com/api/bdd/

xdescribe('Introduction to Mocha and WallabyJS', () => {

  // You can disable test by adding an 'x' in front of the runner
  it('Disable this test', () => {
    const disabled = __;
    expect(disabled).to.be.false;
  });

  // We shall contemplate truth by testing reality, via spec expectations.
  it('true vs false', () => {
    const truth = __;
    const falsy = __;
    expect(truth).to.be.ok;
    expect(falsy).to.not.be.ok;
  });

  it('List all the falsy values in JavaScript', () => {
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
  it('should expect equality',() => {
    const expectedValue = __;
    const actualValue = 1 + 1;

    expect(actualValue === expectedValue).to.be.ok;
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', () => {
    const expectedValue = __;
    const actualValue = (1 + 1).toString();

  // toEqual() will always use === to compare.
    expect(actualValue).to.equal(expectedValue);
  });
});
