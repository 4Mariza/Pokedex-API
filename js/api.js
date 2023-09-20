'use strict'

const getPokemon = async (pokemonId) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

export {
    getPokemon
}