const express = require("express");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());


app.get("/", (req, res)=>{
    let counter = 99
    res.status(200).json({message: `${counter} Bottles of beer on the wall`})
    // next()
})

app.get("/multiple/:bottleNumber", (req, res)=>{
    let counter = 99 - 1
    let bottleNumber = req.params.bottleNumber
    
    let numberBottles = bottles(bottleNumber)
    res.status(200).json({message: numberBottles, link: `localhost:5000/${bottleNumber-1}`})
})

function bottles (num) {
    let numberBottles = []
    // let bottles = bottles
    for(let counter = num; counter >= 1; counter--) 
    {
        // if (counter == 1) {
        //     bottles = 'bottle';
        // }
        numberBottles.push(counter + " bottles of beer on the wall. " + counter + " bottles of beer. Take one down. Pass It Around." + (counter-1) + " bottles of beer on the wall" )
    }
    return numberBottles
}

app.get("/single/:singleNumber", (req, res)=>{
    let counter = 99 - 1
    let singleNumber = req.params.singleNumber
    res.status(200).json({message: singleNumber + " bottles of beer on the wall. " + singleNumber + " bottles of beer. Take one down. Pass It Around." + (singleNumber-1) + " bottles of beer on the wall", link: `localhost:5000/${singleNumber-1}`
    })
})

app.listen(PORT, ()=>{
    console.log(`app is listening at: ${PORT}`)
})