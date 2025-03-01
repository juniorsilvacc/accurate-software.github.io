import 'reflect-metadata';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { errors } from 'celebrate';
import { routes } from './routes';
import { AppError } from '@shared/errors/AppError';
import uploadConfig from '@config/upload';

import createConnection from '@shared/infra/typeorm';

import rateLimiter from './middlewares/rateLimiter';

import '@shared/container';

createConnection();
const app = express();

app.use(cors());
app.use(express.json());

app.use(rateLimiter);

app.use('/file', express.static(uploadConfig.directory));

app.use(routes);

app.use(errors());

app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3333, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
