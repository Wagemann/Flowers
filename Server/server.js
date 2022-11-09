const express = require ('express');
const fetch = require('node-fetch');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = express.Router()

const app = express();

const PORT = process.envPort || 4000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const url = "https://jsonplaceholder.typicode.com/posts"

app.get("/api/v1/data/", (req,res)=>{
  try{
    fetch(url)
    .then((response) => response.json())
    .then((json) => res.send(json)); 
  } catch (err){
    console.log("Error: ",err)
  }  
})

app.get("/api/v1/data/:id", (req,res)=>{
  try{
    const id = req.params.id;
    fetch(url + "/" + id)
    .then((response) => response.json())
    .then((json) => res.send(json));
  } catch (err){
    console.log("Error: ",err)
  }  
})

app.post("/api/v1/data/", (req,res)=>{
  try{
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
  } catch (err){
    console.log("Error: ",err)
  }  
})

app.patch("/api/v1/data/:id", (req,res)=>{
  try{
    const id = req.params.id;
      fetch( url + "/" + id , {
          mode: 'no-cors',
          method: 'PATCH',
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
  } catch (err){
    console.log("Error: ",err)
  }  
})

app.delete("/api/v1/data/:id", (req,res)=>{
  try{
    const id = req.params.id;
      fetch(url + "/" + id , {
          method: 'DELETE',
      });
      res.send({})
  } catch (err){
    console.log("Error: ",err)
  }  
});

// Original idea for how to get all the data then store it in an array
// function callExternalApi(){
//   const url = "https://jsonplaceholder.typicode.com/posts"
//   fetch(url)
//   .then((res)=>{res.json()
//   .then((backendData)=>{
//     data = backendData
//     })
//   })
// }

app.listen(4000, ()=>{
    console.log(`Server is running on ${PORT}`)
    // callExternalApi()
})
