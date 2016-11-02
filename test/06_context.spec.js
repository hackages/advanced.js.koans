/**
* Context in JavaScript
**/
const expect = require('chai').expect;

xdescribe('Context in JavaScript', () => {

  var company = {
    name: 'Hackages Lab',
    mentors: ['Alex', 'Brecht', 'Davy'],
    addMentor: function(name){
      this.mentors.push('Juan');
      return this;
    }
  };

  it('What is "this" refer to?', () => {
    var context = company.addMentor();
    // Fill in the expectation
    expect().to.equal();

    //-------------------------------------------------------
    var context = function(){
      return function init(){
        return this;
      }();
    };

    var result = context();
    // Fill in the expectation
    expect().to.equal();
  });

  it('Should switch the context', () => {
    var context = company.addMentor();
    expect(context).to.equal({name: 'Hackages'});
  });

});
