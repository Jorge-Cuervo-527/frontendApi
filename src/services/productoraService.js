import axios from 'axios';

const BASE_URL = 'https://mi-backend-wy1n.onrender.com/productora';

export const obtenerProductoras = async () => {
  try {
    const respuesta = await axios.get(BASE_URL);
    return respuesta.data;
  } catch (error) {
    console.error("Error obteniendo las productoras:", error);
    throw error;
  }
};

export const crearProductora = async (productora) => {
  try {
    const respuesta = await axios.post(BASE_URL, productora);
    return respuesta.data;
  } catch (error) {
    console.error("Error creando la productora:", error);
    throw error;
  }
};

export const editarProductora = async (id, productora) => {
  try {
    const respuesta = await axios.put(`${BASE_URL}/${id}`, productora);
    return respuesta.data;
  } catch (error) {
    console.error("Error editando la productora:", error);
    throw error;
  }
};