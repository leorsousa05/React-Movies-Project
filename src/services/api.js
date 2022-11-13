import axios from 'axios'
// Base da URL: https://api.themoviedb.org/3
// URL DA API: /movie/550?api_key=e1bedd00c0d97b2bfcfe90877421d90e&language=pt-BR

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

