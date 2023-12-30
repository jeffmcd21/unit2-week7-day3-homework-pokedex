
const express = require("express")
const router = express.Router()
const pokemons = require("../models/pokemons.js")


// ROUTES

// INDEX ROUTE
router.get("/", (req, res) => {
    // res.send(pokemons)
    res.render("pokemons/index.ejs", {pokemons})
})


// NEW ROUTE
router.get("/new", (req, res) => {
    res.render("pokemons/new.ejs")
})


// CREATE ROUTE
router.post("/", (req, res) => {
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


// DELETE ROUTE
router.delete("/:id", (req, res) => {
    const id = req.params.id 
    pokemons.splice(id, 1)
    res.redirect("/pokemons")
})

//EDIT ROUTE
router.get("/:id/edit", (req, res) => {
    const id = req.params.id 
    const pokemon = pokemons[id]
    res.render("pokemons/edit.ejs", {pokemon, id})
})


// UPDATE ROUTE
router.put("/:id", (req, res) => {
    const id = req.params.id 
    const body = req.body 
    // if (body.stats === "on"){
    //     body.stats = true
    // } else {
    //     body.stats = false
    // }
    pokemons[id] = body 
    res.redirect("/pokemons")
})


// SHOW ROUTE
router.get("/:id", (req, res) => {
    const id = req.params.id 
    const pokemon = pokemons[id]
    // res.send(pokemon)
    res.render("pokemons/show.ejs", {pokemon, id})
})


// EXPORTS
module.exports = router