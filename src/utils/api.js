// src/utils/api.js
import axios from 'axios';

const API_URL = 'http://localhost:3306/api';

export const getExamples = async () => {
    try {
        const response = await axios.get(`${API_URL}/examples`);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};

export const createExample = async (exampleData) => {
    try {
        const response = await axios.post(`${API_URL}/examples`, exampleData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.error);
    }
};
