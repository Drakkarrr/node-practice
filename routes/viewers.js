const express = require('express');
const router = express.Router();

router.get('/fetch', (req, res) => {
    res.json({
        message: 'This is the list of all viewers',
        viewers: [
        {
            id: 1,
            name: 'John Doe',
        },
        {
            id: 2,
            name: 'Drakkar Doe',
        }
    ]
    });
})

router.post('/insert', (req, res) => {
    res.json({
        message: 'New viewver has been added',
        viewers: [
            {
                id: 3,
                name: 'Peanut',
            },
            {
                id: 4,
                name: 'Puso',
            }
        ]
    });
})

module.exports = router;