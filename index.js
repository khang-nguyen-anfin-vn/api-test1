const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('this is the respone from express api-test1 3000')
})

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
