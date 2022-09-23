import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World from abdullah computer!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})