const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  maxsize: process.env.MAX_SIZE
};