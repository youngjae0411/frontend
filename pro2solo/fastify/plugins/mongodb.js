const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
fastify.register(require('@fastify/mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  
  url: Process.env.URL
})
})
