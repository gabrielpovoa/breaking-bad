import axios from "axios";

const baseURL = 'https://www.breakingbadapi.com/api/'

export const api = {
    getAllCharacters: async () => {
        let response = await axios.get(`${baseURL}characters/`)
        return response.data
    }
};