const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
let app = express();
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended : false}));
function getRandomNumber(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  
app.get("/ask", (req, res) => {
    res.sendFile(__dirname + "/views/ask.html");
});
app.post("/ask", (req, res) => {
  console.log(req.body);

  const questions = JSON.parse(fs.readFileSync('./questions.json',{encoding:'utf-8'}));
  console.log(typeof questions,questions.length);
  let newQuestion = {
      id : questions.length,
      yes : 0,
      no : 0,
      content : req.body.question 
  }
  questions.push(newQuestion);
  fs.writeFileSync("./questions.json",JSON.stringify(questions));
  res.redirect("/");


});
app.get("/question/:id",(req,res)=>{
    const id = req.params.id;
    const questions = JSON.parse(fs.readFileSync('./questions.json',{encoding:'utf-8'}));
    if (id < questions.length) {
        res.send(questions[id].content);
    } else res.redirect("/");
});

app.get("/randomquestion",(req,res)=>{
    const questions = JSON.parse(fs.readFileSync('./questions.json',{encoding:'utf-8'}));
    let id = getRandomNumber(0,questions.length-1);
        res.send(questions[id].content);
})
app.get("/",(req,res)=>{
    res.send("Hello");
})
app.listen(6969, (err) => {
    if (err) console.log(err);
    else console.log("app is listening port 6969")
})