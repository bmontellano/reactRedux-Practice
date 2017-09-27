import express from 'express'
import path from 'path'

let app = express()
const PORT = 3000


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'))
})

app.listen(PORT, () => console.log('Running on localhost:3000'))
