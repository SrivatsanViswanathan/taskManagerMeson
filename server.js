import 'express-async-errors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRouter from './routes/authRouter.js';

dotenv.config();
const app = express();
app.use(express.json());

const port = 5100;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use('/api/v1/auth', authRouter);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`Server is running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
