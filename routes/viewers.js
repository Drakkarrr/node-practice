const express = require('express');
const router = express.Router();

router.get('/fetch', (req, res) => {
    const { name, age, gender } = req.body;
    
    if (Number(age) === 22) {
        res.status(200).send({
            name,
            age,
            gender
        });
    }
    else {
        res.status(500).send({
            "error": "Age is not 22",
            "status": "error"
        });
    }
})


module.exports = router;