import express from 'express';
const app = express()

app.get('/', (req, res)=> {
    res.send("hello from home")
})

app.get('/contact/:id', (req, res) => {
    res.send({
        name: 'aejaz',
        address: {
            city: "hyderabad"
        }
    })
})

app.listen(4000)