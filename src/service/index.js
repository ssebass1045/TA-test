const axios = require('axios');
require('dotenv').config();

const getUserService = async () => {
    try {
        const response = await axios.get(process.env.URL);
        return response.data;
    } catch (error) {
        throw new Error('Algo salio mal' + error.message);
    }
}

export default getUserService;