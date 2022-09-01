const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//! Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//! Routes
const viewersRoutes = require('./routes/viewers');
app.use('/viewers', viewersRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})