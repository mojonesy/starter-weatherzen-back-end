const knex = require("../db/connection");

function create(newObservation) {
    return knex("observations")
        .insert(newObservation)
        .returning("*");
}

async function list() {
    return knex("observations").select("*");
}

function read(observationId) {
    return knex("observations")
        .select("*").where({ observation_id: Number(observationId) }).first();
}

function update(updatedObservation) {
    return knex("observations")
        .select("*")
        .where({ observation_id: Number(updatedObservation.observation_id) })
        .update(updatedObservation, "*");
}

module.exports = {
    create,
    list,
    read,
    update,
}