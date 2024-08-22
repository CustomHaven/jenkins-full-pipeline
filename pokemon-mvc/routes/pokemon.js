const { Router } = require("express")

const pokemonController = require("../controllers/pokemons")

pokemonsRouter = Router()

pokemonsRouter.get("/", pokemonController.index)
pokemonsRouter.get("/:name", pokemonController.show)
pokemonsRouter.post("/", pokemonController.create)
// pokemonsRouter.patch("/:name", pokemonController.update)
// pokemonsRouter.delete("/:name", pokemonController.destroy)


module.exports = pokemonsRouter;