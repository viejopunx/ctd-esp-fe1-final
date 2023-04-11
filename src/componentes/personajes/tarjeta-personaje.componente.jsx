import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * @param {string} imagen - URL de la imagen
 * @param {string} nombre - Nombre del personaje
 * @param {boolean} esFavorito - Estado de "favorito" del personaje
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({imagen, nombre, esFavorito}) => {

    return <div className="tarjeta-personaje">
        <img src={imagen} alt={nombre}/>
        <div className="tarjeta-personaje-body">
            <span>Hola</span>
            <BotonFavorito esFavorito={esFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;