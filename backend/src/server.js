import express from 'express';
import apiRoutes from './routes/api.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Maitri backend listening on port ${port}`);
});

