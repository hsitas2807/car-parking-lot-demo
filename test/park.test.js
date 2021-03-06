
let expect = require('chai').expect;
let parkingLot = require('../service/parkingLot');

describe('1 ', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 1';
    var result = await parkingLot.park('1');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('2', async function () {
  it('should park the car', async function () {
    var preResult = 'Allocated slot number: 2';
    var result = await parkingLot.park('2');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

