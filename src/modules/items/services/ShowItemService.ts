import { injectable, inject } from 'tsyringe';

import Item from '@modules/items/infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

@injectable()
class ShowItemService {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository,
    ) {}

    public async execute(id: string): Promise<Item | undefined> {
        const item = await this.itemsRepository.findById(id);

        return item;
    }
}

export default ShowItemService;
