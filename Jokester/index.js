const jokes = require('give-me-a-joke');
const colors = require('colors')
jokes.getRandomDadJoke((joke) => {
    console.log(joke.green);
})
// console.log(jokes);