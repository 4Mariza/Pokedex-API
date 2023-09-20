import { getPokemon } from '../js/api.js'

const button = document.getElementById('button')
const input = document.getElementById('input')


const name = document.getElementById('name')
const id = document.getElementById('id')

button.addEventListener('click', async () => {
    const info = await getPokemon(input.value.toString())

    name.textContent = info.name
    id.textContent = info.id

    const pokedex = document.getElementById('pokedex')
    const tagImg = document.createElement('img')
    tagImg.src = info.sprites.other["official-artwork"].front_default
    pokedex.appendChild(tagImg)
})