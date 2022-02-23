const {Router} = require('express')
const {commonResponse, getTodo, postTodo} = require('./todos.controller')

const router = Router()

router.route('/todos').get(getTodo).post(postTodo)


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

// app.delete('/todos/:id', (req, res) => {
//     console.log(req.params.id);
//     let id = req.params.id
//     if(!id) {
//         return res.status(400).json({
//             success: false,
//             error: "id returned as null or undefined",
//             data: null
//         })
//     }
//     let findIndex = todo.findIndex((item) => item.id === parseInt(id))
//     let deleteData = todo.splice(findIndex, 1)
//     console.log(todo);
//     return res.status(200).json({
//         success: true,
//         error: null,
//         data: {
//             todo: deleteData
//         }
//     }
//     )
// })

// app.patch('/todos/:id', (req, res) => {
//     let id = req.params.id;
//     let body = req.body;
//     if(!id) {
//         return res.status(400).json({
//             success: false,
//             error: "id returned as null or undefined",
//             data: null
//         })
//     }
//     let data = todo.find((item) => item.id === parseInt(id))
//     let findIndex = todo.findIndex((item) => item.id === parseInt(id))
//     let edited = {...data, ...body}
//     let updated = todo.splice(findIndex, 1, edited)
//     console.log(todo);
//     return res.status(200).json({
//         success: true,
//         error: null,
//         data: {
//             todo: updated
//         }
//     }
//     )  
// })


// router.all('/', commonResponse)

module.exports = {
    router
}