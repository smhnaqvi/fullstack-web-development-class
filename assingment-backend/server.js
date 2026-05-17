const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/connection');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const studentRoutes = require('./routes/student.routes');

app.use('/students', studentRoutes);

app.get("/welcome", (req, res) => {
    res.send("Welcome to the API");
})

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});