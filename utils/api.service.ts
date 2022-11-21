import axios from 'axios';
import {API} from '../common/interfaces';

const baseUrl = 'https://api.deezer.com';

class ApiService implements API {
   // Handles GET requests
   async get(endpoint: string, q: string = '', limit: number | string) {
       console.log('q', q)
    const res: any = await axios.get(`${baseUrl}${endpoint}?limit=${limit}&${q}`);
    return res;
   }
}

export default new ApiService();

