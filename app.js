// evan bedser ebedser

const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({extended: true}));

function palindromeCheck(x){
    // check type unneeded bc form only gives strings
    // turn to lowercase
    x = x.toLowerCase();
    // remove alphanumeric and whitespace using regex
    x = x.replace(/[^0-9a-z]/gi, '');
    // check if string == reversed string
    return x == x.split("").reverse().join("");
}


app.get('/',(req,res) => res.sendFile("/public/index.html",{root: __dirname}));
app.post('/result',(req,res) => {
    let phrase = req.body['text-to-test'];
    console.log(phrase);
    console.log(palindromeCheck(phrase));
    res.sendFile("/public/index.html",{root: __dirname});
});
app.listen(3000, () => {
    console.log("Server started!");
});
