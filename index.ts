import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import artistsApi from "./routes/artists";
import searchApi from "./routes/search";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// Define routes
app.use('/api/v1/artists', artistsApi);
app.use('/api/v1/search', searchApi);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
