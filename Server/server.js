const express = require ('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.envPort || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

let data = []
console.log(data)

function callExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then((res)=>{res.json()
    .then((backendData)=>{
        data =backendData
        })
    })
}

app.get("/api/v1/data/", async(req,res)=>{
    res.send(data)
})

app.listen(4000, ()=>{
    console.log(`Server is running on ${PORT}`)
    callExternalApi()
})