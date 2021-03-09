import { injectable, inject } from 'tsyringe';

import Item from '@modules/items/infra/typeorm/entities/Item';
import IItemsRepository from '../repositories/IItemsRepository';

interface IRequest {
    flavor: string;
    price: number;
    uri: string;
}

@injectable()
class CreateItemService {
    constructor(
        @inject('ItemsRepository')
        private itemsRepository: IItemsRepository,
    ) {}

    public async execute({ flavor, price, uri }: IRequest): Promise<Item> {
        const item = await this.itemsRepository.create({
            flavor,
            price,
            uri,
        });

        return item;
    }
}

export default CreateItemService;
