import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import ItemsController from '../controllers/ItemsController';
import BackupController from '../controllers/BackupController';

const itemsController = new ItemsController();
const backupController = new BackupController();

const upload = multer(uploadConfig);

const itemsRouter = Router();

itemsRouter.get('/', itemsController.index);

itemsRouter.post(
    '/',

    itemsController.create,
);

itemsRouter.get('/:id', itemsController.show);

itemsRouter.put('/:id', itemsController.update);

itemsRouter.delete('/:id', itemsController.delete);

itemsRouter.post('/backup', upload.single('backup'), backupController.create);

export default itemsRouter;
