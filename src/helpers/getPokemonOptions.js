import pokemonApi from "../api/pokemonApi"

const getPokemons = () => {

    const pokemonsArr = Array.from(Array(650))

    return pokemonsArr.map((_, index) => index + 1)

}


const getPokemonOptions = async () => {


    const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
    const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))
    return pokemons
}


const capitalize = (pokemon) => {
    return pokemon.toUpperCase().charAt(0) + pokemon.slice(1);
}

const getPokemonNames = async ([w, x, y, z] = []) => {

    const promiseArr = [
        pokemonApi.get(`/${w}`),
        pokemonApi.get(`/${x}`),
        pokemonApi.get(`/${y}`),
        pokemonApi.get(`/${z}`),
    ]
    const [pk1, pk2, pk3, pk4] = await Promise.all(promiseArr)

    return [
        { name: capitalize(pk1.data.name), id: pk1.data.id },
        { name: capitalize(pk2.data.name), id: pk2.data.id },
        { name: capitalize(pk3.data.name), id: pk3.data.id },
        { name: capitalize(pk4.data.name), id: pk4.data.id },
    ]
}


export default getPokemonOptions