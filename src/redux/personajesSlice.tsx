import Personaje from "../types/personaje"
import Episodio from "../types/episodio"
import {fetchAllPersonajes, fetchPersonajeById, fetchEpisodioByPersonaje} from "../hooks/api"
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

export const getAllPersonajes = createAsyncThunk('personajes/fetchAllPersonajes', async () => {
    const response = await fetchAllPersonajes();
    return response.results;
  });
  
  export const getPersonajeById = createAsyncThunk('personajes/fetchPersonajeById', async (id: number) => {
    const response = await fetchPersonajeById(id);
    return response;
  });
  
  export const getEpisodiosByPersonaje = createAsyncThunk(
    'personajes/getEpisodiosByPersonaje',
    async (personaje: Personaje) => {
      const response = await fetchEpisodioByPersonaje(personaje.id);
      return response;
    }
  );