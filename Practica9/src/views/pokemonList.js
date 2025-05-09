import axios from "axios";
import { apiHTTPClient } from "../services/axiosClient";


export const getAllPokemons = async() => {
    try {
        const response = await apiHTTPClient.get()
        return response.data.results
    } catch (error) {
        throw new Error (`${error}`);
    }
}

export const createPokemonList = async() => {
    try {
        const pokemons = await getAllPokemons()

        pokemons.forEach(async(element) => {
            console.log(element.name);
            console.log(element.url);

            const response = await axios.get(element.url)
            let imagen = response.data.sprites.other.showdown.front_default
            console.log(response.data.sprites.other.showdown.front_default)
            const application = document.querySelector("#app")
            const containerPokemon = document.createElement("div")
            containerPokemon.className = 'container-pokemon'

            containerPokemon.innerHTML = `
                <p>${element.name}</p>
                <img src="${imagen}" height="200px"/>
                <button>Agregar al carrito</button>
            `

            application.appendChild(containerPokemon)
        });
    } catch (error) {
        throw new Error (`${error}`);
    }
}
