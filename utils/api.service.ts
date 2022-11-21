import axios from 'axios';
import {API} from '../common/interfaces';

const baseUrl = 'https://api.deezer.com';

class ApiService implements API {
   // Handles GET requests
   async getAll(endpoint: string, q: string = '', limit: number | string) {
    const res: any = await axios.get(`${baseUrl}${endpoint}?limit=${limit}&${q}`);
    return res;
   }

   async getById (endpoint: string, id: string | number) {
    const res: any = await axios.get(`${baseUrl}${endpoint}/${id}`);
    return res;
   };

   async getByUrl (url: string) {
    const res: any = await axios.get(url);
    return res;
   };
}

export default new ApiService();

