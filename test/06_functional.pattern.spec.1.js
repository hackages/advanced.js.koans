import { expect } from 'chai';

describe('JavaScript Inheritance Functional Patterns', () => {

  const animal = function (name) {
    const that = {};
    that.name = name || '';
    that.gender = '';
    that.planetOfBirth = 'Earth';
    that.getGender = function () {
      return this.gender;
    };
    return that;
  };

  const male = function (name) {
    const that = animal(name);
    that.name = name;
    that.gender = "Male";
    return that;
  };

  const dog = male('joe');
  it('Analysing dog', () => {
    // What will be his gender?
    // Where was he born?
  });

  const female = function (name) {
    const that = animal(name);
    that.name = name;
    that.gender = "Female";
    return that;
  };

  const cat = female('ana');
  it('Analysing cat', () => {
    // What will be his gender?
    // Where was he born?
  });

  // Changing the planetOfBirth for the dog to "Pluton"
  dog.planetOfBirth = "Pluton";

  it('Analysing dog and cat', () => {
    // Where were they born?
  });
});
