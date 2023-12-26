const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000

app.use(bodyParser.json());

app.post('/convo', (req, res)=>{
    console.log(req.body[0]);
    res.send("Got Post");
})

app.get('/route', (req,res)=>{
    res.json({
        name: "Andrew",
        age: 20,
        gender: "Male"
    })
})

app.get('/', (req,res)=>{
    res.send('Hello World!')
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})