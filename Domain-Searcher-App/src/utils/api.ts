import axios from 'axios';

const API_BASE_URL = 'https://api.example.com/domains'; // Replace with the actual API endpoint

export const searchDomains = async (query: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}?search=${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching domain results:', error);
        throw error;
    }
};

export const checkDomainAvailability = async (domain: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/check?domain=${domain}`);
        return response.data;
    } catch (error) {
        console.error('Error checking domain availability:', error);
        throw error;
    }
};