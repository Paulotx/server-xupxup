import express from 'express';
import cors from 'cors';
import uploadConfig from '@config/upload';

import '@shared/infra/typeorm';
import '@shared/container';

import routes from './routes';

const app = express();
app.use('/uploads', express.static(uploadConfig.uploadsFolder));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server started on port 3333!');
});
