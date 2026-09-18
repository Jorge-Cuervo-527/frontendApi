import axios from 'axios';

const BASE_URL = 'https://mi-backend-wy1n.onrender.com/tipo';

export const obtenerTipos = async () => {
  try {
    const respuesta = await axios.get(BASE_URL);
    return respuesta.data;
  } catch (error) {
    console.error("Error obteniendo los tipos:", error);
    throw error;
  }
};

export const crearTipo = async (tipo) => {
  try {
    const respuesta = await axios.post(BASE_URL, tipo);
    return respuesta.data;
  } catch (error) {
    console.error("Error creando el tipo:", error);
    throw error;
  }
};

export const editarTipo = async (id, tipo) => {
  try {
    const respuesta = await axios.put(`${BASE_URL}/${id}`, tipo);
    return respuesta.data;
  } catch (error) {
    console.error("Error editando el tipo:", error);
    throw error;
  }
};