require("dotenv").config(); 
const express = require("express"); 
const axios = require("axios"); 
const cors = require("cors"); 
//const countryCodes = require("./countries"); // cross origin issue for loading image can be handled in the frontend using *crossorigin="anonymous"* ATTR
const app = express(); 

app.use(cors())

app.use(express.urlencoded({extended : true})); 


app.get("/all-news", (req, res)=>{
    const country = req.body.country; // provide The 2-letter ISO 3166-1 code of the country
    let url = `https://newsapi.org/v2/everything?q=everything&apiKey=${process.env.API_KEY}`
    axios.get(url)
    .then(response=>{
        res.json({
            status : 200, 
            success : true, 
            message : "Successfully fetched the data", 
            data :  response.data
        })
    })
    .catch(function (error) {
        // handle error
        res.json({
            status : 500, 
            success : false, 
            message : "Failed to fetch Data form the API", 
            error : error
        })
    })
})

app.get("/top-headlines", (req, res)=>{
    // const country = req.body.country; // provide The 2-letter ISO 3166-1 code of the country
    let url = `https://newsapi.org/v2/top-headlines/sources?apiKey=${process.env.API_KEY}`
    axios.get(url)
    .then(response=>{
        res.json({
            status : 200, 
            success : true, 
            message : "Successfully fetched the data", 
            data : response.data
        })
    })
    .catch(function (error) {
        // handle error
        res.json({
            status : 500, 
            success : true, 
            message : "Failed to fetch Data form the API", 
            error : error
        })
    })
})
app.options('/country/:iso', cors());

app.get("/country/:iso", (req, res)=>{
    const country = req.params.iso; // provide The 2-letter ISO 3166-1 code of the country
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`
    axios.get(url)
    .then(response=>{
        res.json({
            status : 200, 
            success : true, 
            message : "Successfully fetched the data", 
            data : response.data
        })
        // console.log(response.data);
        // res.send(response.data);
    })
    .catch(function (error) {
        // handle error
        res.json({
            status : 500, 
            success : true, 
            message : "Failed to fetch Data form the API", 
            error : error
        })
    })
})

app.listen(3000, function(){
    console.log("Server is running at port 3000"); 
})