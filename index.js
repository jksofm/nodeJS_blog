const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello d me 1 2')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
