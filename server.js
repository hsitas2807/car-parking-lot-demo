const initmain = require('./index');
const express = require('express');
const parkingLotAPI = require('./service/parkingLot');
const app = express();
const { rateLimiter } = require('./helpers/rateLimiter');

app.use(rateLimiter);


app.listen(3000, function () {
  console.log('listening on 3000');
  initmain.intiMain();

})

app.get('/', function (req, res) {
  var result = `Welcome to ParkingLot API.<br/> Please use /park/{slot} for parking a Car <br/> /leave/{slot} for freeing occupied slot and <br/> /getCarInfo/{slot or registrationNo} for getting information`;
  res.send(result);
});

app.get('/park/:id', function (req, res) {

  var result = parkingLotAPI.park(req.params.id);
  result.then((result) => {
    console.log("Success", result);
    res.end(JSON.stringify(result));
  }).catch((error) => {
    console.log("Error", error);
  })

});

app.get('/leave/:id', function (req, res) {

  var result = parkingLotAPI.leave(req.params.id);
  result.then((result) => {
    console.log("Success", result);
    res.end(JSON.stringify(result));
  }).catch((error) => {
    console.log("Error", error);
  })

});

app.get('/getCarInfo/:id', function (req, res) {
  var result = parkingLotAPI.getCarDetails(req.params.id);
  result.then((result) => {
    console.log("Success", result);
    res.end(JSON.stringify(result));
  }).catch((error) => {
    console.log("Error", error);
  })


});