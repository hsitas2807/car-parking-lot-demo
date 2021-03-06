
let expect = require('chai').expect;
let parkingLot = require('../service/parkingLot');

describe('leave 2', async function () {
  it('should free slot no 2', async function () {
    var preResult = 'Slot  numbmer 2 is free';
    var result = await parkingLot.leave(2);
    console.log(result);
    expect(result).to.be.equal(preResult);
  });
});

