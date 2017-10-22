const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.status(404).send({
        error: 'Page not found', 
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res, next) => {
    res.status(200).send([
        {
            name: 'Francesco',
            age: 31
        }, 
        {
            name: 'Vanessa',
            age: 29
        }, 
        {
            name: 'Lucy',
            age: 4
        }, 
        {
            name: 'Dummy',
            age: 2
        }
    ]);
});

app.listen(3000, () => console.log('listening on port 3000'));

module.exports = app;