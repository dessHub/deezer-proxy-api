import {Request, Response} from "express";
import ApiService from "../../utils/api.service";

class TracksController {

    async list(req: Request, res: Response) {
        const params = req.query;
        const limit: string | number = params['limit'] ? params['limit'] as string : 20;
        // Delete limit from query object
        delete params.limit
        /** 
        * Get query params and generate a valid query param string for deezer API
        * If q exist in the params it takes precedence 
        */
        let queryString = 'q=';
        const keys = Object.keys(params);
        if (params['q'] || keys.length === 0) {
            queryString += params['q'] ? `${params['q']}` : '';
        } else {
            keys.forEach(key => {
                const value = params[key]
                queryString = `${queryString}${key}:"${value}"`
            })
        }

        try {
            const tracks = await ApiService.get('/search', queryString, limit);
            return res.json(tracks.data);
        } catch (error) {
            console.log('error', error)
            return res.status(500).json({error: 'Something went wrong.'})
        }
    }
}



export default new TracksController();