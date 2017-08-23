var Todo = require('../models/todo.model');

module.exports = function (app) {

    app.get('/api/todos', function (req, res) {
        Todo.find(function (err, todos) {
            if (err) 
                res.send(err); // res.send == return
            res.json(todos); // return all todos in JSON format
        });
    });

    app.post('/api/todos', function (req, res) {
        Todo.create({
            text: req.body.text,
            done: false
        }, function (err, todo) {
            if (err) 
                res.send(err);
        });

    });

    app.delete('/api/todos/:id', function (req, res) {
        Todo.remove({
            _id: req.params.id
        }, function (err, todo) {
            if (err) 
                res.send(err);
        });
    });

};
