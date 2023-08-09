const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Welcome :)");
});

app.get("/about", function(req, res){
    res.send("I am Student");
});

app.get("/contact", function(req, res){
    res.send("EmailId: pranavsg2002@gmail.com");
});

app.get("/calculator", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/calculator", function(req, res){
    console.log(req.body);

    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;
    res.send("The sum of two numbers is: "+sum);
});

app.get("/bmi", function(req, res){
    res.sendFile(__dirname+"/bmi.html");
});

app.post("/bmi", function(req, res){
    let w1 = Number(req.body.weight);
    let h1 = Number(req.body.height);

    let bmi = w1 / (h1*h1);
    res.send("The BMI of your body is: "+bmi);

});

app.listen(5000, function(req, res){
    console.log('Server is running on port 5000');
});