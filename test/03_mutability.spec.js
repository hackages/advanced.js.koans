const expect = require('chai').expect;

describe("About Mutability", () => {

  it("should expect object properties to be public and mutable", () => {
    const aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).to.equal("Alan");
  });

  it("should understand that constructed properties are public and mutable", () => {
    function Person(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }

    const aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).to.equal(__);
  });

  it("should expect prototype properties to be public and mutable", () => {
    function Person(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }

    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };

    const aPerson = new Person ("John", "Smith");
    expect(aPerson.getFullName()).to.equal(__);

    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };

    expect(aPerson.getFullName()).to.equal(__);
  });

  it("should know that variables inside a constructor and constructor args are private", () => {
    function Person(firstname, lastname) {
      const fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    const aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).to.equal(__);
    expect(aPerson.getLastName()).to.equal(__);
    expect(aPerson.getFullName()).to.equal(__);

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).to.equal(__);
  });

});
