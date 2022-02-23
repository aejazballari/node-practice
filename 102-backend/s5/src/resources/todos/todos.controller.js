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

const commonResponse = (req, res) => {
    return res.json({message: 'hello world'})
}

const getTodo = (req, res) => {
    res.json({
        todo
    })
}

const postTodo = (req, res) => {
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
} 

module.exports = {
    commonResponse, getTodo, postTodo
}