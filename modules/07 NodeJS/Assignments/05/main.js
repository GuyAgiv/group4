const express = require('express');

const app = express();

app.use(express.json()); // Middleware - for reading the BODY

const chatMessages = [];

app.get('/', (req, res) => {
    res.json({chatMessages});
});

app.post('/', (req,res) => {

    const newMessage = req.body;
    newMessage['id'] = Math.ceil(Math.random() * 100);
    chatMessages.push(newMessage);
    console.log(chatMessages);
    res.json({ status : "OK"});

});

app.listen(5500, ()=> console.log("Server is running at port 5500!"));