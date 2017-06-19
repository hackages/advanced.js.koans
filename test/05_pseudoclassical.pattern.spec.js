import { expect } from 'chai';

describe('JavaScript Inheritance Pseudoclassical Patterns', () => {

  const extendPrototype = function(child, parent) {
    child.prototype = parent.prototype;
  };

  // base Animal object
  const Animal = function () { };
  // inhertiable attributes / methods
  Animal.prototype = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    getGender: function () {
      return this.gender;
    }
  };

  const Male = function (name) {
    this.name = name;
    this.gender = 'Male';
  };

  // Male inherits from Animal
  extendPrototype(Male, Animal);


  const dog = new Male('dog');
  it('Analysing an instance of Male', () => {
    // What will be his gender?
    // Where was he born?
  });

  const Female = function (name) {
    this.name = name;
    this.gender = 'Female'; // By default we set it
  };

  // Female inherit from Animal
  extendPrototype(Female, Animal);


  const cat = new Female('cat');
  it('Analysing an instance of Female', () => {
    // What will be his gender?
    // Where was she born?
  });

  it('Analysing dog and cat', () => {
    // Changing the planetOfBirth for the Male to "Pluton"
    Male.prototype.planetOfBirth = "Pluton";
    // Where were they born? (dog and cat)
  });
});
