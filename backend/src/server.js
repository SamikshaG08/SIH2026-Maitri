import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ status: 'foundation-ready' });
});

app.listen(port, () => {
  console.log(`Maitri backend foundation listening on port ${port}`);
});

// TODO: Connect to MySQL database.
// TODO: Register versioned REST API routes.

