const BASE_URL = 'https://rickandmortyapi.com/api/';

export async function fetchAllPersonajes() {
  try {
    const response = await fetch(`${BASE_URL}character`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchPersonajeById(id:number) {
  try {
    const response = await fetch(`${BASE_URL}character/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchEpisodioByPersonaje(id:number) {
  try {
    const response = await fetch(`${BASE_URL}character/${id}`);
    const data = await response.json();
    return data.episode;
  } catch (error) {
    console.error(error);
  }
}