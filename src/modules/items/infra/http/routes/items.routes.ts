import { Router } from 'express';

import ItemsController from '../controllers/ItemsController';

const itemsController = new ItemsController();

const itemsRouter = Router();

itemsRouter.get('/', itemsController.index);

itemsRouter.post(
    '/',

    itemsController.create,
);

itemsRouter.get('/:id', itemsController.show);

itemsRouter.put('/:id', itemsController.update);

itemsRouter.delete('/:id', itemsController.delete);

export default itemsRouter;
