import axios from 'axios';
import { getFeatureData } from '../utils/featureData';
import config from '../config/config';

export const sendApiCall = async () => {
    try {
        const featureData = getFeatureData();
        const response = await axios.post(config.apiEndpoint, featureData);
        console.log('API Response:', response.data);
    } catch (error) {
        console.error('Error sending API call:', error);
    }
};