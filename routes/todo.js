const { Router } = require('express')
const Todo = require('../models/todo')

const router = Router()

// Получение списка задач
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.findAll()
        res.status(200).json(todos)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Создание новой задачи
router.post('/', async (req, res) => {
    try {
        const todo = await Todo.create({
            title: req.body.title,
            done: false
        })
        res.status(201).json({ todo })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

// Изменение задачи
router.put('/:id', (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})
// Удаление задачи
router.delete('/:id', (req, res) => {
    try {

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

module.exports = router