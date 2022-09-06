//Gabriel Ekodo
// Priscilla Akumu

const assert = require("chai").assert;

const factorial = require("../factorial");

describe("returns factorial of a number", () => {
  it("factorial(0) = 1", () => {
    
    assert.equal(factorial(0), 1);
  });

  it("factorial(1) = 1", () => {
    assert.equal(factorial(1), 1);
  });

  it("factorial(3) = 6", () => {
    assert.equal(factorial(3), 6);
  });
});
