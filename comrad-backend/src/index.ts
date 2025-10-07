import express from 'express';
import storageRoutes from './routes/storageRoutes';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', storageRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});