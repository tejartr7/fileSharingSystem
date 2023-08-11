import axios from 'axios';

const API_URL = 'https://file-sharing-system-backend-j81a.onrender.com';

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        console.log('uploaded successfully');
        return response.data;
    } catch (error) {
        console.log('Error while calling the API ', error.message);
    }
}