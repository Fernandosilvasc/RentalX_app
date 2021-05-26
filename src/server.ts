import express from 'express';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🔥 The server has started at port: ${PORT}`);
});
