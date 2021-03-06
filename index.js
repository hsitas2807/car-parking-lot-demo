const parkingLotInstance = require('./service/parkingLot')
const { maxsize } = require('./config/config');
/**
 *  initialize parking lot with maxsize value
 * 
 */
let intiMain = async () => {

    try {
        const result = await parkingLotInstance.createParkingLot(maxsize);
        console.log(result);
    } catch (e) {
        console.log(`error occured ==> ${e}`);
    }
}


module.exports = {
    intiMain
}