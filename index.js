const express = require('express')
const request = require('request');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  
  request('http://10.0.8.3', function (error, response, body) {
    if (error) {
      res.send('call to http://10.0.8.3 fail. Err ' + error)
    } else
    {
      res.send('call to http://10.0.8.3 success. Code ' + response.statusCode)
    }
  });

})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
