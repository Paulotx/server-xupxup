import { container } from 'tsyringe';

import ItemsRepository from '@modules/items/infra/typeorm/repositories/ItemsRepository';
import IItemsRepository from '@modules/items/repositories/IItemsRepository';

container.registerSingleton<IItemsRepository>(
    'ItemsRepository',
    ItemsRepository,
);
