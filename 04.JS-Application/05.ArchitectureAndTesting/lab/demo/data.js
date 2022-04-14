import * as api from './api.js'    // importirame vsichki exportnati funkcii ot api.js vuv promenlivata "api";


const login = api.login;
const register = api.register;
const logout = api.logout;

const endPoints = {
    movies: '/data/movies'
};

export async function getAllMovies() {
    return api.get(endPoints.movies);
}