
const express = require("express")
const pokemons = require("./models/pokemons.js")
const app = express()

// MIDDLEWARE
app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))


// INDEX ROUTE
app.get("/pokemons", (req, res) => {
    // res.send(pokemons)
    res.render("index.ejs", {pokemons})
})


// NEW ROUTE
app.get("/pokemons/new", (req, res) => {
    res.render("new.ejs")
})


// CREATE ROUTE
app.post("/pokemons", (req, res) => {
    const body = req.body
    // res.send(body)
    // if (body.stats === "on"){
    //     body.stats = true
    // } else {
    //     body.stats = false
    // }
    pokemons.push(body)
    res.redirect("/pokemons")

})


// SHOW ROUTE
app.get("/pokemons/:id", (req, res) => {
    const id = req.params.id 
    const pokemon = pokemons[id]
    // res.send(pokemon)
    res.render("show.ejs", {pokemon})
})


// LISTENING
app.listen(8000, () => {
    console.log("listening on port 8000")
})