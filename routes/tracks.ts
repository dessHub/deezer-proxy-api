import express, { Express, Request, Response } from 'express';
import controller from '../controllers/tracks';

const tracksApi: Express = express();

tracksApi.get('/', function(req: Request, res: Response) {
  controller.list(req, res);
});

export default tracksApi;