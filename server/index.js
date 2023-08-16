// importing libraries
const express = require("express");
const mongoose = require("mongoose");
const items = require("./models/items");
const cors = require("cors");
const app = express();

// set up communication between client and server
app.use(express.json());
app.use(cors());

// connecting to MongoDB
mongoose.connect("mongodb+srv://allison:strawberries@summerapp.kirb9yz.mongodb.net/summerlist?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

// create post route
app.post('/add', async (req, res) => {
    const item = new items(req.body);
    try {
        await item.save();
        res.send(req.body);
    } catch (err) {
        console.log(err)
    }
})

// create update route
app.put('/update', async (req, res) => {
    console.log(req.body);
    const newStatus = req.body.newStatus;
    const id = req.body.id;

    items.findById(id)
    .then(function (result) {
        result.status = newStatus;
        result.save();
        res.send(result)
    })
    .catch(function (err) {
        console.log(err);
    })
})

// create get route
app.get('/read', async (req, res) => {
    items.find({})
    .then(function (result) {
        res.send(result);
    })
    .catch(function (err) {
        console.log(err);
    })
})

// create delete route
app.delete('/delete', async (req, res) => {
    const id = req.body.id;
    items.findOneAndDelete({ _id: id }).exec()
    .then(function (result) {
        res.send("deleted");
    })
    .catch(function(err) {
        console.log(err);
    })
})


app.listen(3001, () => {
    console.log('server running');
})