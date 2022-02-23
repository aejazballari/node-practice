const express = require('express')
const bodyParser = require('body-parser')
const {router} = require('./src/resources/todos/todos.router')

const app = express()
app.use(bodyParser.json())
app.use('/api/todos', router)
app.listen(4000, () => console.log('listening to 4000 port'))