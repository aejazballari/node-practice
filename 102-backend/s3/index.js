import add from './app.js'
import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(8080)

add(8,2)