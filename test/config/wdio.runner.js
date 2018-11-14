// TODO: Move to Quasar CLI
var Launcher = require('webdriverio').Launcher
const request = require('request')

const retries = 20
let shouldCheck = true
let count = 0

// TODO: Better mappings to QuasarConfig
const config = {
  host: process.env.SELENIUM_HOST || 'localhost',
  port: process.env.SELENIUM_PORT || 4444,
  path: '/wd/hub/status'
}

let interval = setInterval(() => {
  // Check for selenium running
  if (shouldCheck) {
    shouldCheck = false
    count += 1
    request(`http://${config.host}:${config.port}${config.path}`, {json: true}, (err, res, body) => {
      if (err) {
        if (err.code === 'ECONNREFUSED' && count <= retries) {
          console.warn(err.message)
          shouldCheck = true
        } else {
          clearInterval(interval)
          throw new Error(err)
        }
      } else if (typeof body.value !== 'undefined' && typeof body.value.ready !== 'undefined') {
        if (body.value.ready) {
          clearInterval(interval)
          run()
        } else if (count <= retries) {
          shouldCheck = true
          console.warn('Waiting..... Not ready yet.....')
        } else {
          clearInterval(interval)
          throw new Error('Timeout while waiting for Selenium')
        }
      } else {
        throw new Error('Invalid State! Must have value:ready!!')
      }
    })
  }
}, 3000)

function run () {
// TODO: Better path mapping with quasar-cli && QuasarConfig
  var wdio = new Launcher('./test/config/wdio.conf.js', {});
  wdio.run().then(function (code) {
    process.exit(code)
  }, function (error) {
    console.error('Launcher failed to start the test', error.stacktrace);
    process.exit(1)
  })
}
