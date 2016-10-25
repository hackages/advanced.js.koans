const expect = require('chai').expect;

describe("About Objects", () => {

  xdescribe("Properties", () => {
    let megalomaniac;

    beforeEach(() => {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", () => {
      expect(megalomaniac.mastermind).to.equal(___);
    });

    it("should confirm that properties are case sensitive", () => {
      expect(megalomaniac.henchwoman).to.equal(___);
      expect(megalomaniac.henchWoman).to.equal(___);
    });

    it("should know that properties can be added and deleted", () => {
      const megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

      expect("secretary" in megalomaniac).to.equal(__);

      megalomaniac.secretary = "Agent Smith";
      expect("secretary" in megalomaniac).to.equal(__);

      delete megalomaniac.henchman;
      expect("henchman" in megalomaniac).to.deep.equal(__);
    });
  });

  xdescribe("'this' context", () => {
    it("should confirm that when a function is attached to an object, 'this' refers to the object", () => {
      let currentDate = new Date();
      let currentYear = (currentDate.getFullYear());
      let megalomaniac = {
        mastermind: "James Wood",
        henchman: "Adam West",
        birthYear: 1970,
        calculateAge: () => {
          return currentYear - this.birthYear;
        }
      };

      expect(currentYear).to.deep.equal(__);
      expect(megalomaniac.calculateAge()).to.deep.equal(__);
    });
  });

  xdescribe("'in' keyword", () => {
    let megalomaniac;

    beforeEach(() => {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", () => {

      const hasBomb = "theBomb" in megalomaniac;

      expect(hasBomb).to.deep.equal(__);
    });

    it("should not have the detonator however", () => {

      const hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).to.deep.equal(___);
    });
  });

  xdescribe("Prototype", () => {
    it("should use prototype to add to all objects", () => {

      function Circle(radius){
        this.radius = radius;
      }

      let circle = new Circle(10);
      const colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).to.equal(__);
      expect(colouredCircle.colour).to.deep.equal(__);

      Circle.prototype.describe = () => {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).to.deep.equal(__);
      expect(colouredCircle.describe()).to.deep.equal(__);
    });
  });
});
