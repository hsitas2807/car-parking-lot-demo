/**
 *  Utils to search  car from parking lot.
 * @param {*} slot 
 * @param {*} prop 
 * @param {*} carArray 
 */
let search = async (slot, prop, carArray) => {
  for (var i = 0; i < carArray.length; i++) {
    if (carArray[i][prop] === slot) {
      return carArray[i];
    }
  }
  return false;
}
/**
 * Utils to remove  car from parking lot.
 * @param {*} slot 
 * @param {*} prop 
 * @param {*} carArray 
 */
let remove = async (slot, prop, carArray) => {
  var i = carArray.length;
  while (i--) {
    if (carArray[i]
      && carArray[i].hasOwnProperty(prop)
      && (arguments.length > 2 && carArray[i][prop] === slot)) {
      carArray.splice(i, 1);
    }
  }
  return carArray;
}

module.exports = {
  search,
  remove
}


