import express, { Express, Request, Response } from 'express';

const searchApi: Express = express();

searchApi.get('/', function(req: Request, res: Response) {
  res.send('Hello from searchApi root route.');
});

export default searchApi;