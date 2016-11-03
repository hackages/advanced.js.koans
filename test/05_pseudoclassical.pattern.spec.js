import { expect } from 'chai';

describe('JavaScript Inheritance Pseudoclassical Patterns', () => {

  const extendPrototype = (child, parent) => {
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

  // Customer inherit from Person
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

  // Employee inherit from Person
  extendPrototype(Female, Animal);


  const cat = new Female('cat');
  it('Analysing an instance of Female', () => {
    // What will be his gender?
    // Where was she born?
  });

  // Changing the planetOfBirth for the Male to "Pluton"
  Male.prototype.planetOfBirth = "Pluton";

  it('Analysing dog and cat', () => {
    // Where were they born?
  });
});
