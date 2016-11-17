import { expect } from 'chai';

describe("About Arrays", () => {
  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", () => {
    const emptyArray = [];
    expect(typeof(emptyArray)).to.equal(__);
    expect(emptyArray.length).to.equal(__);

    const multiTypeArray = [0, 1, "two",  () => { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).to.equal(__);
    expect(multiTypeArray[2]).to.equal(__);
    expect(multiTypeArray[3]()).to.equal(__);
    expect(multiTypeArray[4].value1).to.equal(__);
    expect(multiTypeArray[4]["value2"]).to.equal(__);
    expect(multiTypeArray[5][0]).to.equal(__);
  });

  it("should understand array literals", () => {
    const array = [];

    // Oops
    expect(array).to.not.equal([]);

    // Introducing ... deep equal
    expect(array).to.deep.equal(__);

    array[0] = 1;
    expect(array).to.deep.equal(__);

    array[1] = 2;
    expect(array).to.deep.equal(__);

    array.push(3);
    expect(array).to.deep.equal(__);
  });

  it("should understand array length", () => {
    let array = [1, 2, 3, 4];

    expect(array.length).to.equal(__);
    array.push(5, 6);
    expect(array.length).to.equal(__);

    array = new Array(10);
    expect(array.length).to.equal(__);

    array.length = 5;
    expect(array.length).to.equal(__);
  });

  it("should slice arrays", () => {
    const array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).to.deep.equal(__);
    expect(array.slice(0, 2)).to.deep.equal(__);
    expect(array.slice(2, 2)).to.deep.equal(__);
    expect(array.slice(2, 20)).to.deep.equal(__);
    expect(array.slice(3, 0)).to.deep.equal(__);
    expect(array.slice(5, 1)).to.deep.equal(__);
    expect(array.slice(1)).to.deep.equal(__);
    expect(array.slice(0, -1)).to.deep.equal(__);
    expect(array.slice(0, -3)).to.deep.equal(__);
  });

  it("should know array references", () => {
    const array = ["zero","one","two","three","four","five"];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }

    passedByReference(array);
    expect(array[1]).to.equal(__);

    const assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).to.equal(__);

    const copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).to.equal(__);
  });

  it("should push and pop", () => {
    const array = [1, 2];
    array.push(3);
    expect(array).to.deep.equal(__);

    const poppedValue = array.pop();
    expect(poppedValue).to.equal(__);
    expect(array).to.deep.equal(__);
  });

  it("should know about shifting arrays", () => {
    const array = [1, 2];

    array.unshift(3);
    expect(array).to.deep.equal(__);

    const shiftedValue = array.shift();
    expect(shiftedValue).to.equal(__);
    expect(array).to.deep.equal(__);
  });
});
