const redis = require('redis')

const client = redis.createClient(process.env.REDIS_URL)

client.on('error', err => console.log(`Error ${err}`))

const rateLimiter  = (req, res, next) => {
  const ip = req.ip // get the ip address for the user here
  client
    .multi() 
    .set([ip, 0, 'EX', 10, 'NX']) 
    .incr(ip) 
    .exec((err, replies) => {
      if (err) {
        return res.status(500).send(err.message)
      }
      const reqCount = replies[1]
      if (reqCount > 10) {
        return res
          .status(403)
          .send(`Quota of ${10} per ${10}sec exceeded`)
      }
      return next()
    })
}

module.exports = { rateLimiter }