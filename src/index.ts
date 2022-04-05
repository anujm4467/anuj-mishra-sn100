import express from 'express';
import routes from './routes';
import { drone } from './utils/constants';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

const port = 3000;
app.listen(port, () => {
  console.log(`${drone} listening on port ${port} of SN100!`);
});
