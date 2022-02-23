const express = require('express');
const app = express()

app.get('/cats', (req, res) => {
    res.send('meow!!')
})

app.get('/dogs', (req, res) => {
    res.send('woaf!!')
})

app.post('/cats', (req, res) => {
    res.send('this post request')
})


app.get('*', (req, res) => {
    res.send('I dont know the path')
} )

app.listen(8080, () =>{
    console.log('listening to 3000');
})
