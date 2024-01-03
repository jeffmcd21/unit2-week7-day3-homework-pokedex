
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
    let newPokesInfo = {
        name: req.body.name,
        img: req.body.img,
        type: [req.body.type[0], req.body.type[1]],
        stats: {
          hp: req.body.hp,
          attack: req.body.attack,
          defense: req.body.defense,
          spattack: req.body.spattack,
          spdefense: req.body.spdefense,
          speed: req.body.spdefense,
        },
      }
      req.body = newPokesInfo;
    // const body = req.body
    // res.send(body)
    // if (body.stats === "on"){
    //     body.stats = true
    // } else {
    //     body.stats = false
    // }
    // body.stats = {
    //     hp: req.body.hp,
    //     attack: req.body.attack,
    //     defense: req.body.defense,
    //     spattack: req.body.spattack,
    //     spdefense: req.body.spdefense,
    //     speed: req.body.speed,
    // }
    // console.log(body)
    pokemons.push(req.body)
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
    res.render("pokemons/edit.ejs", {pokemons, pokemon, id})
})


// UPDATE ROUTE
router.put("/:id", (req, res) => {
    let updatePokes = {
        name: req.body.name,
        type: req.body.type.split(" "),
        stats: {
          hp: req.body.hp,
          attack: req.body.attack,
          defense: req.body.defense,
          spattack: req.body.spattack,
          spdefense: req.body.spdefense,
          speed: req.body.spdefense,
        },
      };
      let currentPokes = pokemons[req.params.id];
      req.body = updatePokes;
      let overWrite = {
        ...currentPokes,
        ...req.body,
      }
      pokemons[req.params.id] = overWrite;
      res.redirect("/pokemons");
    });
    
    // const id = req.params.id 
    // const body = req.body 
    // body.stats = {
    //     hp: req.body.hp,
    //     attack: req.body.attack,
    //     defense: req.body.defense,
    //     spattack: req.body.spattack,
    //     spdefense: req.body.spdefense,
    //     speed
    // }
    // if (body.stats === "on"){
    //     body.stats = true
    // } else {
    //     body.stats = false
    // }
//     pokemons[id] = body 
//     res.redirect("/pokemons")
// })


// SHOW ROUTE
router.get("/:id", (req, res) => {
    const id = req.params.id 
    const pokemon = pokemons[id]
    // res.send(pokemon)
    res.render("pokemons/show.ejs", {pokemons, pokemon, id})
})


// EXPORTS
module.exports = router