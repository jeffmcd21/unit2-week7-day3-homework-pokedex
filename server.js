
const express = require("express")

const app = express()

const pokemons = ["poke1", "poke2", "poke3"]


app.get("/pokemons", (req, res) => {
    res.send(pokemons)
})


// SHOW ROUTE
app.get("/pokemons/:id", (req, res) => {
    const id = req.params.id 
    const pokemon = pokemons[id]
    res.send(pokemon)
})


// LISTENING
app.listen(8000, () => {
    console.log("listening on port 8000")
})