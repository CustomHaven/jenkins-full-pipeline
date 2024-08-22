const express = require("express");
const cors = require("cors")

const logger = require("./logger")
const pokemonRouter = require("./routes/pokemon");

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(logger)

// Routing
app.get("/", (req, res) => {
    res.send("Hello Worldsss!")
})

app.use("/pokemons", pokemonRouter)

module.exports = app
