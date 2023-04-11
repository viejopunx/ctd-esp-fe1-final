import { fetchAllPersonajes } from '../../hooks/api';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllPersonajes } from '../../redux/personajesSlice';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import useEffect from 'react'

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const dispatch = useAppDispatch();
    const personajes = useAppSelector(state => state.personajes);
    console.log(dispatch(getAllPersonajes))

    return <div className="grilla-personajes">
       <TarjetaPersonaje />
       <TarjetaPersonaje />
       <TarjetaPersonaje />
    </div>
}
 
export default GrillaPersonajes;