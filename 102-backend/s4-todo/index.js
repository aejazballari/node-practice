import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

let todo = [
    {
        id: 1,
        text: 'hello',
        isCompleted: true,
    },
    {
        id: 2,
        text: 'there',
        isCompleted: false,
    },
    {
        id: 3,
        text: 'aejaz',
        isCompleted: false,
    },
]


app.use(bodyParser.json())
app.use(cors())
// app.options('*', cors()) 

app.get('/hello', (req,res, next) => {
    res.json({
        message: 'hello'
    })
})


app.get('/todos', cors(), (req, res, next) => {
    res.json({
        todo
    })
})


app.post('/todos', cors(), (req, res, next) => {
    const text = req.body.text
    console.log(req.body);
    if(!text) {
        return res.status(400).json({
            success: false,
            error: "you must provide text",
            data: null
        })
    }
    const newTodo = {
        id: todo.length + 1,
        text: text,
        isCompleted: false
    }
    todo.push(newTodo)
    return res.status(201).json({
        success: true,
        error: null,
        data: {
            todo: newTodo
        }
    })
})

app.get('/',(req,res) => {
    console.log(req, res)
}
)

// app.delete('/todos', cors(), (req, res) => {
//     let id = parseInt(req.body.id)
//     if(!id) {
//         return res.status(400).json({
//             success: false,
//             error: "id returned as null or undefined",
//             data: null
//         })
//     }
//     let filterData = todo.filter((item) => item.id !== id)
//     todo = filterData
//     return res.status(200).json({
//         success: true,
//         error: null,
//         data: {
//             todo: filterData
//         }
//     }
//     )
// })

app.delete('/todos/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id
    if(!id) {
        return res.status(400).json({
            success: false,
            error: "id returned as null or undefined",
            data: null
        })
    }
    let findIndex = todo.findIndex((item) => item.id === parseInt(id))
    let deleteData = todo.splice(findIndex, 1)
    console.log(todo);
    return res.status(200).json({
        success: true,
        error: null,
        data: {
            todo: deleteData
        }
    }
    )
})

app.patch('/todos/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;
    if(!id) {
        return res.status(400).json({
            success: false,
            error: "id returned as null or undefined",
            data: null
        })
    }
    let data = todo.find((item) => item.id === parseInt(id))
    let findIndex = todo.findIndex((item) => item.id === parseInt(id))
    let edited = {...data, ...body}
    let updated = todo.splice(findIndex, 1, edited)
    console.log(todo);
    return res.status(200).json({
        success: true,
        error: null,
        data: {
            todo: updated
        }
    }
    )  
})

app.listen(4000, () => {
    console.log('server started on 4000 port');
})