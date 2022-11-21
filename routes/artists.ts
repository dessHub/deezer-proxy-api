import express, { Express, Request, Response } from 'express';

const artistsApi: Express = express();

artistsApi.get('/', function(req: Request, res: Response) {
  res.send('Hello from artistsApi root route.');
});

export default artistsApi;