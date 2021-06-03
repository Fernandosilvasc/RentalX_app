import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { routes } from './routes';
import swaggerFileConfig from './swagger.json';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFileConfig));
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`🔥 The server has started at port: ${PORT}`);
});
