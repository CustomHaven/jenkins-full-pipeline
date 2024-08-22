const db = require("../db/connect");

class Pokemon {
    constructor(pokemon) {
        this.id = pokemon.id;
        this.name = pokemon.name;
        this.type = pokemon.type;
    }

    static async getAll() {
        try {
            const response = await db.query("SELECT * FROM pokemon;");
            if (response.rows.length === 0) {
                throw new Error("No pokemons found.")
            }
            return response.rows.map(pokemon => new Pokemon(pokemon));
        } catch (error) {
            throw new Error("Error fetching pokemons");
        }
    }

    static async getOne(name) {
        try {
            const response = await db.query("SELECT * FROM pokemon WHERE name = $1;", [name]);
            if (response.rows.length === 0) {
                throw new Error("No pokemon found");
            }
            return new Pokemon(response.rows[0]);
        } catch (error) {
            throw new Error("Error fetching pokemon");
        }
    }

    static async create(data) {
        const { name, type } = data;
        if (!name || !type) {
            throw new Error("Required fields are missing");
        }
        const response = await db.query("INSERT INTO pokemon (name, type) VALUES ($1, $2) RETURNING *;", [name, type]);

        if (response.rows.length === 0) {
            throw new Error("Failed to insert into the DB");
        }
        return new Pokemon(response.rows[0]);
    }

    // async update(data) {
    //     const { name, type } = data;
    //     if (!name || !type) {
    //         throw new Error("Required fields are missing");
    //     }
    //     const response = await db.query("INSERT INTO pokemon (name, type) VALUES ($1, $2) RETURNING *;", [name, type]);

    //     if (response.rows.length === 0) {
    //         throw new Error("Failed to insert into the DB");
    //     }
    //     return new Pokemon(response.rows[0]);
    // }
};


module.exports = Pokemon;