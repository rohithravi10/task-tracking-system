const express = require('express');
const mongoose = require('mongoose');
const { signup, login } = require('./src/controllers/authController');


const app = express();
app.use(express.json());
const PORT = 3000;
try {
    mongoose.connect('mongodb://localhost:27017/task-tracking')
    console.log("Connected to database");
} catch {
    console.log("Error connecting to database");
}


app.get('/', (req, res) => {
    return res.status(200).send("Test Request");
});


app.post('/login', login);

app.post('/register', signup);


app.listen(PORT, (err) => {
    if (err) {
        console.log("Error starting the server");
    } else {
        console.log("Server started at 3000");
    }
});