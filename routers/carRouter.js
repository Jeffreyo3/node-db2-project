const express = require('express');
const db = require('../dbConfig');
const router = express.Router();

// GET
router.get('/', async (req, res) => {
    try {
        const cars = await db('cars')
        res.json(cars)
    } catch (err) {
        res.status(500).json({ message: "Failed to get cars", error: err });
    }
});

// GET by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [car] = await db('cars').where('id', id);
        res.json(car);
    } catch (err) {
        res.status(500).json({ message: "Failed to get car", error: err });
    }
});

// CREATE
router.post('/', async (req, res) => {
    const carData = req.body;
    try {
        const car = await db('cars').insert(carData);
        res.status(201).json(car);
    } catch (err) {
        res.status(500).json({ message: "Failed to add car", error: err });
    }
})

// UPDATE by id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rowsUpdated = await db('cars')
            .where('id', id)
            .update(req.body);
        res.status(200).json({ updated: rowsUpdated });
    } catch (err) {
        res.status(500).json({ message: "Failed to update car", error: err });
    }
});

// DELETE by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const rowsDeleted = await db('cars')
            .where('id', id)
            .del();
        res.status(200).json({ deletedRecords: rowsDeleted })
    } catch (err) {
        res.status(500).json({ message: "Failed to delete car", error: err });
    }
});


module.exports = router;