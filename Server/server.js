const express = require ('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.envPort || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const url = "https://jsonplaceholder.typicode.com/posts"

app.get("/api/v1/data/", (req,res)=>{
    fetch(url)
    .then((response) => response.json())
    .then((json) => res.send(json));
})

app.get("/api/v1/data/:id", (req,res)=>{
    const id = req.params.id;
    fetch(url + "/" + id)
    .then((response) => response.json())
    .then((json) => res.send(json));
})

app.post("/api/v1/data/", (req,res)=>{
    fetch( url, {
        method: 'POST',
        body: JSON.stringify({
          title: (req.body.title),
          body: (req.body.body),
          userId: (req.body.userId),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((response) => response.json())
    .then((json) => res.send(json));
})

app.put("/api/v1/data/:id", (req,res)=>{
    const id = req.params.id;
    fetch( url + "/" + id , {
        method: 'PUT',
        body: JSON.stringify({
          id: (req.body.id),
          title: (req.body.title),
          body: (req.body.body),
          userId: (req.body.userId),
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => res.send(json));
})

app.delete("/api/v1/data/:id", (req,res)=>{
    const id = req.params.id;
    fetch(url + "/" + id , {
        method: 'DELETE',
    });
    res.send({})
});

app.listen(4000, ()=>{
    console.log(`Server is running on ${PORT}`)
})
