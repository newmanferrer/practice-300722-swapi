import {
  IBaseURL,
  IPeople,
  ICharacter,
  IPlanets,
  IFilms,
  ISpecies,
  IStarShips,
  IVehicles
} from '../../models';

class NetworkError extends Error {
  constructor() {
    super('Network error');
  }
}

const baseURL = 'https://swapi.dev/api/';
const people = `${baseURL}/people/?page=1`;
const characterByName = `${baseURL}/people/?search=`;
const characterById = `${baseURL}/people/`;
const planets = `${baseURL}/planets/?page=`;
const films = `${baseURL}/films/?page=`;
const species = `${baseURL}/species/?page=`;
const starShips = `${baseURL}/starships/?page=`;
const vehicles = `${baseURL}/vehicles/?page=`;

export const getBaseURL = async (): Promise<IBaseURL> => {
  try {
    const response = await fetch(baseURL);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPeople = async (page = people): Promise<IPeople> => {
  try {
    const response = await fetch(page);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCharacterByName = async (name: string): Promise<IPeople> => {
  try {
    const response = await fetch(`${characterByName}${name}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCharacterById = async (id: number): Promise<ICharacter> => {
  try {
    const response = await fetch(`${characterById}${id}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPlanets = async (page = 1): Promise<IPlanets> => {
  try {
    const response = await fetch(`${planets}${page}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getFilms = async (page = 1): Promise<IFilms> => {
  try {
    const response = await fetch(`${films}${page}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getSpecies = async (page = 1): Promise<ISpecies> => {
  try {
    const response = await fetch(`${species}${page}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getStarShips = async (page = 1): Promise<IStarShips> => {
  try {
    const response = await fetch(`${starShips}${page}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
export const getVehicles = async (page = 1): Promise<IVehicles> => {
  try {
    const response = await fetch(`${vehicles}${page}`);
    if (!response.ok) throw new NetworkError();
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

/*
ok -> ok: true / status: 200 - 299 / 
*/

/*
net::ERR_NAME_NOT_RESOLVED -> error en la ruta principal ej: swapi.dev - swapi.d
TypeError: Failed to fetch
*/

/*
Error code 404 - Not Found
net::ERR_FAILED 404 -> error en la ruta del recurso
TypeError: Failed to fetch
Ejemplo: ruta ok: https://swapi.dev/api/ | ruta bad: https://swapi.dev/ap/'

Existen diferentes motivos por los que se da un Error 404, los detallamos a continuación:
Porque el usuario ha escrito mal la URL: Escribiendo de manera manual la URL, y ha cometido un error mecanográfico.
Porque la página se ha eliminado: Hemos eliminado dicha la página.
Porque hemos movido o cambiado la URL de la página: Hayamos decidido cambiar la estructura de la URL.
*/

/*
Failed to load resource:
net::ERR_INTERNET_DISCONNECTED
*/
