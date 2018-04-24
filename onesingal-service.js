/*module.exports = {
sendNotification = function (data) {
    var https = require('https')
    var headers = {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "Basic ZTdmYmJkZTYtOTMwMC00YjY0LTg0NGYtNGE3NTIwYzlkM2Ux"
    }

    var options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers: headers
    }

    var https = require('https')
    var req = https.request(options, function (res) {
      res.on('data', function (data) {
        console.log("Response:")
        console.log(JSON.parse(data))
      })
    })

    req.on('error', function (e) {
      console.log("ERROR:")
      console.log(e)
    })

    req.write(JSON.stringify(data))
    req.end()
  },
  ping: (data, callbacks) => {
    console.log("ping data ", data)
    callback('Emiited')
  }
}*/
