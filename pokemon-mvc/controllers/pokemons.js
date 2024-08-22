const Pokemon = require("../models/Pokemon");

const index = async (req, res) => {
    try {
        const response = await Pokemon.getAll();
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const show = async (req, res) => {
    try {
        const name = req.params.name;
        const response = await Pokemon.getOne(name);
        res.status(200).json({ data: response });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

const create = async (req, res) => {
    try {
        const body = req.bdy;
        const response = await Pokemon.create(body);
        res.status(201).json({ data: response });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = { index, show, create };