
const express = require("express")
const pokemons = require("./models/pokemons.js")
const app = express()

// MIDDLEWARE
app.use(express.static("public"))

// INDEX ROUTE
app.get("/pokemons", (req, res) => {
    //res.send(pokemons)
    res.render("index.ejs", {pokemons})
})


// SHOW ROUTE
app.get("/pokemons/:id", (req, res) => {
    const id = req.params.id 
    const pokemon = pokemons[id]
    //res.send(pokemon)
    res.render("show.ejs", {pokemon})
})


// LISTENING
app.listen(8000, () => {
    console.log("listening on port 8000")
})