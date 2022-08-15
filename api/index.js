import express from 'express';
import index from './routes/index.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(index);

if (require.main === module) {
  const port = 3001;
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
  });
}

export default app;