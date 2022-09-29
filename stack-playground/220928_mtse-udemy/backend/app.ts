import express from 'express';

const app = express();
app.use(express.json());

// All router
import products from './routes/product';

app.use('/api/v1', products);

export default app;