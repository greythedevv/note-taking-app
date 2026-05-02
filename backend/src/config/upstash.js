const {Ratelimit} = require('@upstash/ratelimit');
const { Redis } = require('@upstash/redis');
const dotenv = require('dotenv')

dotenv.config()

// create a new ratelimiter, that allows 100 requests per 60 sec
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s"),
    analytics: true
})

module.exports = ratelimit