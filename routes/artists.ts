import express, { Express, Request, Response } from 'express';
import ArtistsController from '../controllers/artists';

const artistsApi: Express = express();

artistsApi.get('/:id', function(req: Request, res: Response) {
    ArtistsController.getOne(req, res);
});

export default artistsApi;